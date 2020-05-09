import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="breadcrumb-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3><span>Anthocyanin</span>
                                Sense of Essence</h3>
                        </div>
                        <div className="col-md-6">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="#">Home</a>
                                <span className="breadcrumb-item active">Contact</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-fluid" src="/assets/images/about.png" alt="Chania" />
                        </div>
                    </div>

                    <div className="contact-Box">
                        <div className="contact-Boxheader">
                            <h3>Get <span>InTouch</span></h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor
                                sit amet.
                            </p>
                        </div>
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="name" id="name"
                                                       placeholder="First Name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="name"
                                                       id="name-2"
                                                       placeholder="Last Name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control mb-30" name="email"
                                                       id="email"
                                                       placeholder="E-mail" required="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="subject"
                                                       id="subject"
                                                       placeholder="Your Number" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                        <textarea name="message" className="form-text-area mb-30" id="message" cols="30"
                                                  rows="6" placeholder="Your Message *" required=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <button className="btn">Send</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="address-box">
                                        <div className="d-flex">
                                            <div className="icon-box mb-30">
                                                <i className="fa fa-location-arrow"></i>
                                            </div>
                                            <div className="txt-box">
                                                <h3>Our head office address</h3>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                    nonumy
                                                    eirmodtempor invidunt ut labore </p>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-30">
                                            <div className="icon-box">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="txt-box">
                                                <h3>Call Us On</h3>
                                                <p>Dummy@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-30">
                                            <div className="icon-box">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="txt-box">
                                                <h3>Email Us At</h3>
                                                <p>+91 XXX XXX XXX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
