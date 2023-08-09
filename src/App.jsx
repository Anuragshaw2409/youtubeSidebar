import React from 'react'
import History from './pages/History'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import LikedVideos from './pages/LikedVideos'
import Shorts from './pages/Shorts'
import Subscriptions from './pages/Subscriptions'
import WatchLater from './pages/WatchLater'
import YourVideos from './pages/YourVideos'
import Sidebar from './components/Sidebar'
import "./main.scss";

function App() {
  return (
    <>

    <Router>
      <div className="app">
        <Sidebar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shorts' element={<Shorts/>} />
          <Route path='/subscriptions' element={<Subscriptions/>} />
          <Route path='/library' element={<Library/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/yourvideos' element={<YourVideos/>} />
          <Route path='/watchlater' element={<WatchLater/>} />
          <Route path='/likedvideos' element={<LikedVideos/>} />
        </Routes>
      </div>





    </Router>

    </>


    
  );
}

export default App;
