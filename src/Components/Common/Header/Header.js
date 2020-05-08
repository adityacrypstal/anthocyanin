import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="res-menu">
                    <div className="mobile-header">
                        <img src="/assets/images/mob-logo.png" className="img-fluid"/>
                        <div id="remenu-icon">
                            <img src="/assets/images/ham.png" className="img-fuid"/>
                        </div>
                    </div>

                    <div id="remenu-list">
                        <ul className="nav nav-bar ">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li className="">
                                <span data-toggle="dropdown">ABOUT US
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="overview.html">Overview</a>
                                        <a className="dropdown-item" href="inner.html">CERTIFICATIONS</a>
                                        <a className="dropdown-item" href="inner.html">FACILITIES</a>
                                        <a className="dropdown-item" href="inner.html">TEAM</a>

                                    </div>
                                </span>
                            </li>
                            <li className="">
                                <span  data-toggle="dropdown">PRODUCTS
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="products.html">Oleoresin</a>
                                        <a className="dropdown-item" href="essential.html">Essential Oil</a>
                                    </div>
                                </span>
                            </li>
                            <li className=""><a href="r&d.html">R & D</a></li>
                            <li className=""><a href="news.html">NEWS & EVENTS</a></li>
                            <li className=""><a href="blog.html">BLOG</a></li>
                            <li className="pr-0">
                                <a href="contact.html">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-box d-flex">
                    <a href="index.html" className="logo">
                        <img src="/assets/images/logo.png" alt="logo" className="img-fluid"/>
                    </a>


                    <div className="main-menu">
                        <div className="top-nav mt-30">
                            <ul className="nav nav-bar d-flex">
                                <li className="mr-50"><a href="#tel:"><span>CALL</span>+91 00000000000</a></li>
                                <li className="mr-50"><a href="#mailto:"><span>MAIL</span>info@anthocyanin.com</a></li>
                                <li><a href="career.html"><span className="m-0">CAREER</span></a></li>
                            </ul>
                        </div>
                        <nav className="mt-20 main-nav">
                            <ul className="nav nav-bar ">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li className="">
                                    <span data-toggle="dropdown">ABOUT US
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="overview.html">Overview</a>
                                            <a className="dropdown-item" href="inner.html">CERTIFICATIONS</a>
                                            <a className="dropdown-item" href="inner.html">FACILITIES</a>
                                            <a className="dropdown-item" href="inner.html">TEAM</a>

                                        </div>
                                    </span>
                                </li>
                                <li className="">
                                    <span  data-toggle="dropdown">PRODUCTS
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="products.html">Oleoresin</a>
                                            <a className="dropdown-item" href="essential.html">Essential Oil</a>
                                        </div>
                                    </span>
                                </li>
                                <li className=""><a href="r&d.html">R & D</a></li>
                                <li className=""><a href="news.html">NEWS & EVENTS</a></li>
                                <li className=""><a href="blog.html">BLOG</a></li>
                                <li className="pr-0">
                                    <a href="contact.html">CONTACT US</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
