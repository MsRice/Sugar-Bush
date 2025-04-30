import logo from './logo.svg';
import './App.css';
import React ,{ useState , useEffect , useContext, useRef} from 'react';
import { BrowserRouter as Router , Routes, Route ,Link} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import OrderNow from './pages/OrderNow';

function App() {
  
  const [navHome, setNavHome] = useState(false);


  return (

    <Router>
      <Nav navHome={navHome} setNavHome={setNavHome}/>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path='/Bookings' element={<Bookings />}/>
        <Route path='/Order-Now' element={<OrderNow />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
