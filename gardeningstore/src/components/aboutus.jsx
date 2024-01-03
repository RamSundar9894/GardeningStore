import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './plantmain.css';
const Aboutus = () => {
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
                                <a href="#about" class="nav__link">About</a>
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
          <section class="about section container" id="about">
                <div class="about__container grid">
                <img src={require("D:/React/finalprojectdemo/src/assets/about1.jpg" ).default} alt="" className="about__img" />

                    <div class="about__data">
                        <h2 class="section_title about_title">
                            Who we really are & why choose us
                        </h2>

                        <p class="about__description">
                            We are a group of people enthusiastically aimed at turning your little spheres into greener spaces. We believe that to live a healthier life, it is imperative to have an environment that’s just not beneficial for health but also sufficiently vivid to produce gallons of positive energy each day. Hence, keeping the urban lifestyle of the day in mind, we pamper and encourage your love for plants, gardening, and the decoration of your home.
                        </p>
                    </div>
                </div>
            </section>
      </div>
    );
};
export default Aboutus;
