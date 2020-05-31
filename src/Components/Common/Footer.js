import React from 'react';
const logo = `${process.env.PUBLIC_URL}/assets/images/footer-logo.png`;
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} className="img-fluid footer-logo" alt="footer logo" />
                        </div>
                        <div className="col-md-3">
                            <h5>Head Office</h5>
                            <p><a>Anthocyanin Group<br></br>
                                Kolenchery<br></br>
                                Ernakulam, Kerala<br></br>
                                India - 682311</a></p>
                        </div>

                        <div className="col-md-3">
                            <h5>Footer Navigation</h5>
                            <ul>
                                <li><a href={'/#'}>About Us</a></li>
                                <li><a href={'/overview'}>Overview</a></li>
                                <li><a href={'/#'}>Vision and Mission</a></li>
                                <li><a href={'/#'}>Our Team</a></li>
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
