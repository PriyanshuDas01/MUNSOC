import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {

    render() {
        return (
            <>
            <footer class="footer" id='footer'>
  
    <ul class="social-icon">
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li> */}
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li> */}
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/company/munsoc-nita/mycompany/?viewAsMember=true">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/munsoc.nita/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="https://www.munsoc.in/">
          <ion-icon name="globe"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
   
      <li class="menu__item"><a class="menu__link" href="#">Contact Us</a></li>

    </ul>
    <p>&copy;2023 MUNSOC NITA | All Rights Reserved</p>
  </footer>

            </>)}}
