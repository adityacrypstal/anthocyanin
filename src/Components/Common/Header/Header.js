import React from 'react';
import NavLink from "./NavLink";
import {createBrowserHistory} from "history";
import {useParams, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import categoryAction from "../../../redux/Category/actions";
import $ from 'jquery'
const mobileLogo = `${process.env.PUBLIC_URL}/assets/images/mob-logo.png`
const webLogo = `${process.env.PUBLIC_URL}/assets/images/logo.png`;
const Hamburger = `${process.env.PUBLIC_URL}/assets/images/ham.png`;
const history = createBrowserHistory()
const Header = () => {
    const {loading, initialCategory, categories} = useSelector(state => state.categories);
    const [toggleFlag,setToggle] = React.useState(false)
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialCategory) {
            dispatch(categoryAction.getCategories());
        }
    }, [dispatch, initialCategory]);
    const toggle = () =>{
        setToggle(!toggleFlag)
    };
    return (
        <header>
            <div className="container">
                <div className="res-menu">
                    <div className="mobile-header">
                        <img src={mobileLogo} className="img-fluid"/>
                        <div id="remenu-icon">
                            <img src={Hamburger} className="img-fuid" onClick={()=>toggle()}/>
                        </div>
                    </div>

                    <div id="remenu-list" style={{display:`${toggleFlag?'block':'none'}`}}>
                        <ul className="nav nav-bar ">
                            <li className="active">
                                <NavLink to={'/'}>
                                    Home
                                </NavLink>
                            </li>
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
                                    {
                                        categories && categories.map((data, i) => (
                                            <NavLink key={i} className="dropdown-item"
                                                     to={`/category/${data.id}`}>{data.title}</NavLink>
                                        ))
                                    }
                                </div>

                            </li>
                            <li className="test">
                                <NavLink to={'/researches'}>
                                    R & D
                                </NavLink>
                            </li>
                            <li className="test">
                                <NavLink to={'/news'}>
                                    NEWS & EVENTS
                                </NavLink>
                            </li>
                            <li className="test">
                                <NavLink to={'/blog'}>
                                    BLOG
                                </NavLink>
                            </li>
                            <li className="test">
                                <NavLink to={'/contact'}>
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-box d-flex">
                    <a href="index.html" className="logo">
                        <img src={webLogo} alt="logo" className="img-fluid"/>
                    </a>


                    <div className="main-menu">
                        <div className="top-nav mt-30">
                            <ul className="nav nav-bar d-flex">
                                <li className="mr-50"><a href="#tel:"><span>CALL</span>+91 00000000000</a></li>
                                <li className="mr-50"><a href="#mailto:"><span>MAIL</span>info@anthocyanin.com</a></li>
                                <NavLink to={'/careers'}>
                                    <li><span className="m-0">CAREER</span></li>
                                </NavLink>
                            </ul>
                        </div>
                        <nav className="mt-20 main-nav">
                            <ul className="nav nav-bar ">
                                <li className="active">
                                    <NavLink to={'/'}>
                                        Home
                                    </NavLink>
                                </li>
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
                                        {
                                            categories && categories.map((data, i) => (
                                                <NavLink key={i} className="dropdown-item"
                                                         to={`/category/${data.id}`}>{data.title}</NavLink>
                                            ))
                                        }
                                    </div>

                                </li>
                                <li className="test">
                                    <NavLink to={'/researches'}>
                                        R & D
                                    </NavLink>
                                </li>
                                <li className="test">
                                    <NavLink to={'/news'}>
                                        NEWS & EVENTS
                                    </NavLink>
                                </li>
                                <li className="test">
                                    <NavLink to={'/blog'}>
                                        BLOG
                                    </NavLink>
                                </li>
                                <li className="test">
                                    <NavLink to={'/contact'}>
                                        CONTACT US
                                    </NavLink>
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
