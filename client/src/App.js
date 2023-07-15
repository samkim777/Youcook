import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.js';
import { Youtubeplayer } from './pages/Youtubeplayer.js';
import { Auth } from './pages/auth.js';
import { SavedVideos } from './pages/savedVideos.js';



function App() {
  return <div className='app'>
    <Router>
      <Routes>
        <Route path ='/auth' element = {<Auth/>}></Route>
        <Route path='/' element = {<Home/>}></Route>
        <Route path ='/video' element = {<Youtubeplayer/>}></Route>
        <Route path = '/saved' element = {<SavedVideos/>}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;
