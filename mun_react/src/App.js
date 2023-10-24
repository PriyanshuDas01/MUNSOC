//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Index from './components/index';
import About from './components/aboutus';
// import Count from './components/count';
// import Count from './components/mycount';
 import CountdownComponent from './components/count2';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
      < Navbar />
      < Index />
      {/* < Count/> */}
      < CountdownComponent />
      < About />

    </>
  );
}

export default App;
