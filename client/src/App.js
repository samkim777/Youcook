
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.js"
import { VideoPlayer } from './components/Videoplayer';

function App() {
  return <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;
