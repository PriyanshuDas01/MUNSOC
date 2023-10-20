//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='n'>
      </div>
      <header class="top">
        <div class="nav">
          <div className='logo'>
            <img className="rectangle-icon" alt="" src="rectangle-4@2x.png" /></div>
          <div className="menu">
            <div class="home"><a href="!"><button class="button2">
              Home
            </button></a></div>
            <div class="home"><a href="!"><button class="button2">
              Commettiees
            </button></a></div>
            <div class="home"><a href="!"><button class="button2">
              Contact Us
            </button></a></div>
            {/* <div class="home"><a href="!"><button class="button2">
              Login
            </button></a></div> */}
          </div>
        </div>
      </header>

      <div className="back">

        <img className="backimg" alt="" src="back.png" />
        <div className='blurbox'></div>
        <div className='headtext'>
          <div class="model-united-nations">MODEL UNITED NATIONS</div>
          <div class="nit-agartala">NIT AGARTALA</div>
        </div>
      </div>
    </>
  );
}

export default App;
