import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
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
      </header></>
  )
}}

// export default Navbar;