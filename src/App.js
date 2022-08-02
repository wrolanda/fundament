import { Navigate, Route, Routes } from 'react-router-dom';
import Error from './Components/hooks/Error';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Posts from './Components/pages/Posts';
import Navbar from './Components/UI/Navbar/Navbar';
import './styles/App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;