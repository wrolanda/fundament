import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
      {isAuth
        ? <MyButton onClick={logout}>Log out</MyButton>
        : <MyButton>
          <NavLink to='/login'>Log in</NavLink>
        </MyButton>
      }

      <header className='navbar__links'>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>
      </header>
    </div>
  )
}
export default Navbar;