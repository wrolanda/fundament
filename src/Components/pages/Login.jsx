import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <form>
        <MyInput type='email' placeholder='email'/>
        <MyInput type='password' placeholder='password'/>
        <MyButton>Log in</MyButton>
      </form>
    </div>

  );
};

export default Login;