import React from 'react';

const Team = () => {
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
                                <span className="breadcrumb-item active">Team</span>
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
                    <div className="overview">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="header-title">
                                    <span></span>
                                    Team
                                </h4>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-list">
                                    <p>We have a team of diverse and skilled professionals that understand our
                                        organizational value and culture. Each and every employee in our team is
                                        dedicated towards producing the best products for which we prefer to work as
                                        team. </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-list">
                                    <p>Our work ethics are focused on producing not just the best but timely delivery of
                                        product to our valued customers. The professionalism shown by our talented team
                                        of experts allows us to meet the desired results with ease which for most brands
                                        is major challenge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
