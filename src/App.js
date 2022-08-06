import Navbar from './Components/UI/Navbar/Navbar';
import './styles/App.css'
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context/context";
import {useEffect, useState} from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <Navbar/>
      <AppRouter/>
    </AuthContext.Provider>
  )
}

export default App;