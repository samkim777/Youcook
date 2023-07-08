require('./App.css');
const { BrowserRouter: Router, Routes, Route } = require('react-router-dom');
const { Home } = require('./pages/home.js');
const { Youtubeplayer } = require('./pages/Youtubeplayer');
const { Auth } = require('./pages/auth');


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
