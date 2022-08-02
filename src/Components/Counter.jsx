import React, {useState} from 'react';


const Counter = () => {
  const [likes, setLikes] = useState(0);

  const increment = () => {
    setLikes(likes + 1);
  }
  const decrement = () => {
    setLikes(likes - 1);
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;