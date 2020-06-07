import React from 'react';

const logo = `${process.env.PUBLIC_URL}/assets/images/footer-logo.svg`;
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} className="footer-logo" alt="footer logo"/>
                        </div>
                        <div className="col-md-3">
                            <h5>Office Address</h5>
                            <p><a>Anthocyanin Naturals India Pvt Ltd<br></br>
                                Plot No -43 <br></br>Kinfra Mega Food Park<br></br>
                                Palakkad, Kerala<br></br>
                                India - 678557</a></p>
                        </div>

                        <div className="col-md-3">
                            <h5>Footer Navigation</h5>
                            <ul>
                                <li><a href={'/#'}>About Us</a></li>
                                <li><a href={'/overview'}>Overview</a></li>
                                <li><a href={'/facilities'}>Facilities</a></li>
                                <li><a href={'/team'}>Our Team</a></li>
                                <li><a href={'/contact'}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Footer Navigation</h5>
                            <ul>
                                <li><a href={'#'}>Products</a></li>
                                <li><a href={'/researches'}>R&D</a></li>
                                <li><a href={'/blog'}>Blogs</a></li>
                                <li><a href={'/news'}>News and Events</a></li>
                                <li><a href={'/careers'}>Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
