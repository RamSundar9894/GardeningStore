import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './plantmain.css';
const Plantmain = () => {
    return (
        <div>
           <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                         FloraFiesta
                    </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <Link to='/Home'>Home</Link>
                            </li>
                              
                            <li class="nav__item">
                            <Link to='/About'>
                                <a  class="nav__link">About</a>
                            </Link>
                            </li>
                            <li class="nav__item">
                                <a href="#products" class="nav__link">Products</a>
                            </li>
                            <li class="nav__item">
                                <a href="#faq" class="nav__link">FAQs</a>
                            </li>
                            <li class="nav__item">
                            <Link to='/Contactus'>
                                <a href="#" class="nav__link">
                                  Contact Us</a>
                                  </Link>
                            </li>
                            <li class="nav__item">
                              <Link to='/Signin'>
                                <a href="#" class="nav__link">
                                  Sign in</a>
                                  </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
         </div>
    );
}
export default Plantmain;
