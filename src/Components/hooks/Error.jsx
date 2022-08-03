import {NavLink} from "react-router-dom";

const Error = () => {
  return (
    <h1>
      This page doesn't exist. Go to <NavLink to="/">posts</NavLink>
    </h1>
  )
}
export default Error;