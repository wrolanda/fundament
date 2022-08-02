import React, {useEffect, useState} from 'react'
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import * as PropTypes from "prop-types";
import MyInput from "./Components/UI/input/MyInput";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./Components/hooks/usePosts";
import PostService from "./Components/API/PostService";
import Loader from "./Components/UI/Loader/Loader";
import {useFetching} from "./Components/hooks/useFetching";
import {getPageCount} from "./Components/utils/pages";
import Pagination from "./Components/UI/pagination/Pagination";

MyInput.propTypes = {placeholder: PropTypes.string};

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts()
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}}
                onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr/>
      <PostFilter filter={filter}
                  setFilter={setFilter}/>
      {postsError &&
        <h1>Error {postsError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList posts={sortedAndSearchedPosts}
                    remove={removePost}
                    title="Posts about JS"/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
