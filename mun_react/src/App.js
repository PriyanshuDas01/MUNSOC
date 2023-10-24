//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Index from './components/index';
import About from './components/aboutus';
import Com from './components/committee';
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
      <Com />
      <div className='come'></div>

    </>
  );
}

export default App;
