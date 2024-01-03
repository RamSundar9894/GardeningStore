import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const MainContent = () => {
    return (
        <div className="product">
          <Navbar/>
          <section class="product section container" id="products">
                <h2 class="section__title-center">
                    Check out our products
                </h2>


                <div class="product__container grid">
                <article class="product__card">
                        <div class="product__circle"></div>
                        <img src="https://www.urbanplant.in/cdn/shop/files/All_Planters_6_copy.webp?v=1697450989&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
{/* 
                        <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button> */}
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Gardening_Tools_2_copy.webp?v=1688993557&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Care_Diet_1_copy.webp?v=1688993487&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
                    </article>
                    <article class="product__card">
                        <div class="product__circle"></div>
                        <img src="https://www.urbanplant.in/cdn/shop/files/All_Planters_6_copy.webp?v=1697450989&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Gardening_Tools_2_copy.webp?v=1688993557&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
                    </article>

                    <article class="product__card">
                        <div class="product__circle"></div>

                        <img src="https://www.urbanplant.in/cdn/shop/files/Care_Diet_1_copy.webp?v=1688993487&width=240" alt="" class="product__img" />
                        <h3 class="product__title">Cacti Plant</h3>
                        <span class="product__price">$19.99</span>
                    </article>
                </div>
            </section>
          <Footer/>
        </div>
    )
}
export default MainContent;
