import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return (
    <>
    <div className='n'>
      </div>
      <header className="top">
        <div className="nav">
          <div className='logo'>
            <img className="rectangle-icon" alt="" src="rectangle-4@2x.png" /></div>
          <div className="menu">
            <div className="home"><a href="!"><button className="button2">
              Home
            </button></a></div>
            <div className="home"><a href="!"><button className="button2">
              Committees
            </button></a></div>
            <div className="home"><a href="!"><button className="button2">
              Contact Us
            </button></a></div>
             <div class="home"><a href="!"><button class="button2">
              Visit Us
            </button></a></div> 
          </div>
        </div>
      </header></>
  )
}}

// export default Navbar;