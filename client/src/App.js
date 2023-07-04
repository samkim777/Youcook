
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.js"
import { Youtubeplayer } from './pages/Youtubeplayer';

function App() {
  return <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path ='/video' element = {<Youtubeplayer/>}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;
