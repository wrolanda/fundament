import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <NavLink to="/home">home</NavLink>
                <NavLink to="/posts">posts</NavLink>
                <NavLink to="/about">about</NavLink>
            </div>
        </div>
    )
}
export default Navbar;