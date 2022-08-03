  import Navbar from './Components/UI/Navbar/Navbar';
import './styles/App.css'
import AppRouter from "./Components/UI/AppRouter";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <AppRouter/>
    </div>
  )
}

export default App;