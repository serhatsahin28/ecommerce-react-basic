import Navbar from '../components/navbar';
import Carousel1 from '../components/home/carousel1';
import Carousel2 from '../components/home/carousel2';
import Body1 from '../components/home/body1';
import Body2 from '../components/home/body2';

import '../styles/home.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {

  return (
  <>
  <Carousel1 />
  <br />
  <br />

  <Carousel2 />
  <br />
  <br />
  <Body1 />
  <br />
  <br />

  <Body2 />

  </>

  )
}

export default Home
