import React, {useEffect, useRef, useState} from 'react'
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import * as PropTypes from "prop-types";
import MyInput from "../Components/UI/input/MyInput";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../Components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../Components/UI/Select/MySelect";

MyInput.propTypes = {placeholder: PropTypes.string};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]);

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
      <MySelect value={limit}
                onChange={value => setLimit(value)}
                defaultValue="number of items per page"
                option={[
                  {value: 5, name: '5'},
                  {value: 10, name: '10'},
                  {value: 25, name: '25'},
                  {value: -1, name: 'show all'},
                ]}
      />
      {postsError &&
        <h1>Error {postsError}</h1>
      }
      <PostList posts={sortedAndSearchedPosts}
                remove={removePost}
                title="Posts about JS"/>
      <div ref={lastElement} style={{height: 20}}/>
      {isPostsLoading &&
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
          <Loader/>
        </div>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
