import { NavLink } from "react-router-dom";
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

    return (
        <div className='navbar'>
          <MyButton onClick={logout}>Log out</MyButton>
            <div className='navbar__links'>
                <NavLink to="/home">home</NavLink>
                <NavLink to="/posts">posts</NavLink>
                <NavLink to="/about">about</NavLink>
            </div>
        </div>
    )
}
export default Navbar;