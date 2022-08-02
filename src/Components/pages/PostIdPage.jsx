import { useParams } from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();
  console.log(params); 
    return (
      <h1>Post page</h1>
    )
  }
  
export default PostIdPage;