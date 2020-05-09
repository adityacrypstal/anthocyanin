import React from 'react';
import NavLink from "./NavLink";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
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
                            <NavLink to={'/'}>
                                <li className="active">Home</li>
                            </NavLink>
                            <li className="">
                                <span data-toggle="dropdown">ABOUT US</span>
                                    <div className="dropdown-menu">
                                        <NavLink className="dropdown-item" to={'/overview'}>Overview</NavLink>
                                        <NavLink className="dropdown-item"
                                                 to={'/overview'}>CERTIFICATIONS</NavLink>
                                        <NavLink className="dropdown-item" to={'/overview'}>FACILITIES</NavLink>
                                        <NavLink className="dropdown-item" to={'/overview'}>TEAM</NavLink>

                                    </div>

                            </li>
                            <li className="">
                                <span data-toggle="dropdown">PRODUCTS</span>
                                    <div className="dropdown-menu">
                                        <NavLink className="dropdown-item" to={'/category/1'}>Oleoresin</NavLink>
                                        <NavLink className="dropdown-item" to={'/product/1'}>Essential Oil</NavLink>
                                    </div>

                            </li>
                            <NavLink to={'/researches'}>
                                <li className="test">R & D</li>
                            </NavLink>
                            <NavLink to={'/news'}>
                                <li className="test">NEWS & EVENTS</li>
                            </NavLink>
                            <NavLink to={'/blog'}>
                                <li className="test">BLOG</li>
                            </NavLink>
                            <NavLink to={'/contact'}>
                                <li className="test">CONTACT US</li>
                            </NavLink>
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
                                <NavLink to={'/'}>
                                    <li className="active">Home</li>
                                </NavLink>
                                <li className="">
                                    <div className="dropdown">
                                        <span id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">ABOUT US</span>
                                            <div className="dropdown-menu">
                                                <NavLink className="dropdown-item" to={'/overview'}>Overview</NavLink>
                                                <NavLink className="dropdown-item"
                                                         to={'/overview'}>CERTIFICATIONS</NavLink>
                                                <NavLink className="dropdown-item" to={'/overview'}>FACILITIES</NavLink>
                                                <NavLink className="dropdown-item" to={'/overview'}>TEAM</NavLink>

                                            </div>

                                    </div>
                                </li>
                                <li className="">
                                    <span data-toggle="dropdown">PRODUCTS</span>
                                        <div className="dropdown-menu">
                                            <NavLink className="dropdown-item" to={'/category/1'}>Oleoresin</NavLink>
                                            <NavLink className="dropdown-item" to={'/product/1'}>Essential Oil</NavLink>
                                        </div>

                                </li>
                                <NavLink to={'/researches'}>
                                    <li className="test">R & D</li>
                                </NavLink>
                                <NavLink to={'/news'}>
                                    <li className="test">NEWS & EVENTS</li>
                                </NavLink>
                                <NavLink to={'/blog'}>
                                    <li className="test">BLOG</li>
                                </NavLink>
                                <NavLink to={'/contact'}>
                                    <li className="test">CONTACT US</li>
                                </NavLink>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
