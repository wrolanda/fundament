import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context/context";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
   const login = event => {
     event.preventDefault();
     setIsAuth(true);
     localStorage.setItem('auth', 'true')
   }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type='email' placeholder='email'/>
        <MyInput type='password' placeholder='password'/>
        <MyButton>Log in</MyButton>
      </form>
    </div>

  );
};

export default Login;