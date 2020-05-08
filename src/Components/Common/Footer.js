import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/assets/images/footer-logo.png" className="img-fluid footer-logo" alt="footer logo" />
                        </div>
                        <div className="col-md-3">
                            <h5>Head Office</h5>
                            <p>Anthocyanin Group<br></br>
                                Kolenchery<br></br>
                                Ernakulam, Kerala<br></br>
                                India - 682311</p>
                        </div>

                        <div className="col-md-3">
                            <h5>Footer Navigation</h5>
                            <ul>
                                <li>About Us</li>
                                <li>Overview</li>
                                <li>Vision and Mission</li>
                                <li>Our Team</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Footer Navigation</h5>
                            <ul>
                                <li>Products</li>
                                <li>R&D</li>
                                <li>Facilities</li>
                                <li>News and Events</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
