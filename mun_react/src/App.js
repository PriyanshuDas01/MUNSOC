
import './App.css';
import Navbar from './components/navbar';
import Index from './components/index';
import About from './components/aboutus';
import Com from './components/committee';
import CountdownComponent from './components/count2';
import Card from './components/committeecard';
import Foot from './components/footer';
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
      <Card/>
      <Foot/>

    </>
  );
}

export default App;
