import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Login from './LoginPage';
import './plantmain.css';
import Product from './Product';
import Navbar from './Navbar'
import Footer from './Footer'
const Plantmain = () => {
    const faqData = [
        { question: 'Do you ship overseas?', answer: "No, we're Indian & made for India- we ship to every corner of our country." },
        { question: 'Do you charge shipping?', answer: 'Shipping is Free on orders above Rs. 499/-' },
        { question: 'Can I return my product?', answer: 'Yes, we do return products in certain conditions- please visit our Return and Refund Policy page for more detail.' },
        { question: 'Can I get my product customized?', answer: 'Yes, we welcome customisation of the product kindly email or WhatsApp us for the requirement.' },
        { question: 'Can I place bulk orders?', answer: 'Yes, you can avail a huge discount on bulk orders- please click here to fill your requirements, team will contact your immediately.' },
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
        <div>
          <Navbar/>
            <main class="main" >
            <section class="home" id="home">
                <div class="home__container container grid">
                    <img src="D:\React\finalproject\src\assets\home tree.png" alt="" class="home__img" />
                 <div class="home__data">
                        <h1 class="home__title">
                            The rare plant scent for your living room
                        </h1>
                        <p class="home__description">
                            Create incredible plant design for your offices or apartments. Add freshness to your new ideas.
                        </p>
                        <a href="#about" class="button button--flex">
                            Explore <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                    <div class="home__social">
                        <span class="home__social-follow">Follow Us</span>
                        <div class="home__social-links">
                            <a href="https://www.facebook.com/" target="blank" class="home_social-link">
                            </a>
                            <a href="https://www.instagram.com/" target="blank" class="home_social-link">
                            </a>
                            <a href="https://twitter.com/" target="blank" class="home_social-link">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <div className="product">
                
            <section class="product section container" id="products">
                <h2 class="section__title-center">
                    Check out our products
                </h2>
                <div class="product__container grid">
                    <article class="product__card">
                        <div class="product__circle"></div>
                        <Link to='/Product'>

                        <img src="https://www.urbanplant.in/cdn/shop/files/All_Planters_6_copy.webp?v=1697450989&width=240" alt="" class="product__img" />
                        </Link>
                        <p class="product_title">Plants</p>
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>
                        <Link to='/Product1'>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Gardening_Tools_2_copy.webp?v=1688993557&width=240" alt="" class="product__img" />
                        </Link>
                        <p class="product_title">Gardening Tools</p>
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>
                        <Link to='/Product2'>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Care_Diet_1_copy.webp?v=1688993487&width=240" alt="" class="product__img" />
                        </Link>
                        <p class="product_title">Plant Care</p>
                    </article>

                </div>
            </section>
      </div>
<div className="faq-container"id="faq">
      <h2>FAQ</h2>
      <div className="faq-box">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleQuestionClick(index)}>
            <div className="question">
              <h3>{faq.question}</h3>
              <span className="toggle-symbol">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`answer ${activeIndex === index ? 'visible' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </div>
    );
};
export default Plantmain;
