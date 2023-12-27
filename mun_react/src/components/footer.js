import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {

    render() {
        return (
            <>
            <footer className="footer" id='footer'>
  
    <ul className="social-icon">
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li> */}
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li> */}
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/munsoc-nita/mycompany/?viewAsMember=true">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/munsoc.nita/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.munsoc.in/">
          <ion-icon name="globe"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
   
                <li className="menu__item menu__link"><b><u>Contact Us</u></b></li>
              </ul>
              <ul>
                
                <li className="menu__item menu__link">Rudransh Shrivastav: +91-7488935612 </li>
                

    </ul>
    <p>&copy;2023 MUNSOC NITA | All Rights Reserved</p>
  </footer>

            </>)}}
