import React from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './plantmain.css';

const Plantmain = () => {
    const showToast = () => {
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const handleSendMessage = () => {
        // Add your logic for sending the message here
        // For now, let's just show the toast
        showToast();
    };

    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        FloraFiesta
                    </a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                        <li class="nav__item">
                                <Link to='/Home'>
                                Home
                                </Link>

                            </li>
                            <li className="nav__item">
                                <Link to='/About' className="nav__link">About</Link>
                            </li>
                            <li className="nav__item">
                                <a href="#products" className="nav__link">Products</a>
                            </li>
                            <li className="nav__item">
                                <a href="#faq" className="nav__link">FAQs</a>
                            </li>
                            <li className="nav__item">
                                <Link to='/Contactus' className="nav__link">Contact Us</Link>
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
            <section className="contact section container" id="contact">
                <div className="contact__container grid">
                    <div className="contact__box">
                        <h2 className="section__title">
                            Reach out to us today via any of the given information
                        </h2>
                        <div className="contact__data">
                            <div className="contact__information">
                                <h3 className="contact__subtitle">Call us for instant support</h3>
                                <span className="contact__description">
                                    <i className="ri-phone-line contact__icon"></i>
                                    +91 9361671894
                                </span>
                            </div>
                            <div className="contact__information">
                                <h3 className="contact__subtitle">Write us by mail</h3>
                                <span className="contact__description">
                                    <i className="ri-mail-line contact__icon"></i>
                                    ramsundar7871@email.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <form action="" className="contact__form">
                        <div className="contact__inputs">
                            <div className="contact__content">
                                <input type="email" placeholder=" " className="contact__input" />
                                <label htmlFor="" className="contact__label">Email</label>
                            </div>
                            <div className="contact__content">
                                <input type="text" placeholder=" " className="contact__input" />
                                <label htmlFor="" className="contact__label">Subject</label>
                            </div>
                            <div className="contact__content contact__area">
                                <textarea name="message" placeholder=" " className="contact__input"></textarea>
                                <label htmlFor="" className="contact__label">Message</label>
                            </div>
                        </div>
                        <button className="button button--flex" onClick={handleSendMessage}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default Plantmain;
