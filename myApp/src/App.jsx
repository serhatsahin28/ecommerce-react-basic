import Navbar from './components/navbar';
import Home from './pages/home';
import './styles/app.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function App() {

  return (
    <Router basename="/e-commerce/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home sayfası varsayılan olarak açılır */}
      </Routes>
    </Router>

  )
}

export default App
