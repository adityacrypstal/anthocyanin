import React from 'react';
import {useDispatch} from "react-redux";
import contactAction from '../../redux/Contact/actions';
import swal from 'sweetalert';

const Contact = () => {
    const [state, setState] = React.useState({first_name: '', last_name: '', email: '', phone_number: '', message: ''})

    function handlechange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function validate() {
        return state.first_name !== '' && state.last_name !== '' && state.email !== '' && state.phone_number !== '' && state.message !== '';
    }

    const dispatch = useDispatch()

    function submit() {
        if (validate()) {
            dispatch(contactAction.submit(state))
        } else {
            swal({
                title: "Oops",
                text: "Please Fill All Fields!",
                icon: "error",
                buttons: false,
                timer: 2000
            });

        }
    }

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
                            <img className="img-fluid" src="./assets/images/about.png" alt="Chania"/>
                        </div>
                    </div>

                    <div className="contact-Box">
                        <div className="contact-Boxheader">
                            <h3>Get <span>InTouch</span></h3>
                            <p>Our technology can be easily customized for our value added customers, provides quick and
                                reliable service that meet their expectations and demands with the support of modern
                                machinery and advanced processing facility. Our skilled R & D team constantly provide
                                innovative solution and supports for the benefit of our clients with impeccable quality
                                and cost effective products.
                            </p>
                        </div>
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="first_name"
                                                       id="name"
                                                       placeholder="First Name" required="" value={state.first_name}
                                                       onChange={handlechange}/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="last_name"
                                                       id="name-2"
                                                       placeholder="Last Name" required="" value={state.last_name}
                                                       onChange={handlechange}/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control mb-30" name="email"
                                                       id="email"
                                                       placeholder="E-mail" required="" value={state.email}
                                                       onChange={handlechange}/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="phone_number"
                                                       id="subject"
                                                       placeholder="Your Number" value={state.phone_number}
                                                       onChange={handlechange}/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                        <textarea name="message" className="form-text-area mb-30" id="message" cols="30"
                                                  rows="6" placeholder="Your Message *" required=""
                                                  value={state.message} onChange={handlechange}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <button className="btn" onClick={() => submit()}>Send</button>
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
                                                <h3>Office address</h3>
                                                <p>Anthocyanin Naturals India Pvt Ltd<br></br>
                                                    Plot No -43, Kinfra Mega Food Park<br></br>
                                                    Palakkad, Kerala<br></br>
                                                    India - 678557</p>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-30">
                                            <div className="icon-box">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="txt-box">
                                                <h3>Email Us At</h3>
                                                <p>info@anthocyanin.in</p>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-30">
                                            <div className="icon-box">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="txt-box">
                                                <h3>Call Us On</h3>
                                                <p>+91 492 3296200, +91 492 3296201</p>
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
