import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.js';
import { Youtubeplayer } from './pages/Youtubeplayer.js';
import { Auth } from './pages/auth.js';
import { SavedVideos } from './pages/savedVideos.js';
import { Registration } from './pages/register';
import { Navbar } from './components/navbar';





function App() {
  return <div className='app'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/video' element={<Youtubeplayer />}></Route>
        <Route path='/saved' element={<SavedVideos />}></Route>
        <Route path='/register' element={<Registration />}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;
