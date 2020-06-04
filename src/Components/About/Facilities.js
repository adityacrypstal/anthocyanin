import React from 'react';

const Facilities = () => {
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
                                <span className="breadcrumb-item active">Facilities</span>
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
                                    Facilities
                                </h4>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-list">
                                    <p>Our principal facility houses more than 1,50,000 square feet of state-of-the-art
                                        product development, quality control laboratories and manufacturing space. Our
                                        campus is designed & built specifically for producing world’s best Natural
                                        Extracts.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-list">
                                    <p>At Anthocyanin, our quality control department is well equipped with reputed
                                        Quality equipment’s & most modern analytical instruments and well qualified
                                        trained professionals. These may be customized as per your esteemed customer
                                        requirements. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="overview">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-list">
                                    <ul>
                                        <li>High Performance Liquid chromatography
                                        </li>
                                        <li>Gas chromatography with Head Space Sampler
                                        </li>
                                        <li>UV- VIS Spectrophotometer
                                        </li>
                                        <li>Atomic absorption spectrometer
                                        </li>
                                    </ul>
                                    <p>We promise in giving you the highest quality products. Fully
                                        equipped modern laboratory to test the quality parameters such as,
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lightblue mb-30">
                        <div className="row">
                            <div className="col-md-12">

                            </div>
                            <div className="col-md-6">
                                <div className="overview-listImg valuesimg"
                                     style={{
                                         background: "url(./assets/images/update8.png)",
                                         backgroundPosition: '13% !important'
                                     }}>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-list lightblue-txt">
                                    <h4 className="header-title">
                                        <span>Testing</span>
                                        competences
                                    </h4>
                                    <ul>
                                        <li>Active components
                                        </li>
                                        <li>Solvent residues
                                        </li>
                                        <li>Pesticide residues
                                        </li>
                                        <li>Moisture
                                        </li>
                                        <li>Mycotoxins
                                        </li>
                                        <li>Heavy Metals
                                        </li>
                                        <li>Essential oil profiling etc.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;
