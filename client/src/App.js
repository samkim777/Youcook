
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.js"
import { Youtubeplayer } from './pages/Youtubeplayer';
import { Auth } from './pages/auth';

function App() {
  return <div className='app'>
    <Router>
      <Routes>
        <Route path ='/Auth' element = {<Auth/>}></Route>
        <Route path='/' element = {<Home/>}></Route>
        <Route path ='/video' element = {<Youtubeplayer/>}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;
