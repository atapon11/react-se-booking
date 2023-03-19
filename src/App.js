import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import HotelDetail from './pages/HotelDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/hotels'element={<List/>}/>
        <Route path='/hotels/:id'element={<Hotel/>}/>
        <Route path='/HotelDetail' element={<HotelDetail />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
