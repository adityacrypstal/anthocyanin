import React from 'react';

const QualityList = () => {
    return (
        <section className="Quality-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 qualitycard">
                        <div>
                            <h5 className="title">Analytical Instrument</h5>
                            <p>Our quality control department is well equipped with analytical instrument like HPLC,
                                GC,
                                LCMS,
                                GCMS, AAS etc.</p>
                        </div>

                        <figure>
                            <img src="./assets/images/Quality_1.png" className="img-fluid" className="img-fluid" alt=""/>
                            <figcaption><span>01.</span></figcaption>
                        </figure>
                    </div>
                    <div className="col-md-4 qualitycard">
                        <div>
                            <h5 className="title">International Regulations</h5>
                            <p>We comply with international specific relevant statutory and regulatory requirements,
                                and our
                                products are well-known for its safety, value and quality.</p>
                        </div>

                        <figure>
                            <img src="./assets/images/Quality_2.png" className="img-fluid" className="img-fluid" alt=""/>
                            <figcaption><span>02.</span></figcaption>
                        </figure>
                    </div>
                    <div className="col-md-4 qualitycard">
                        <div>
                            <h5 className="title">Modern Laboratory</h5>
                            <p>We have fully equipped modern laboratory with experienced and veteran QC team, well
                                versed in
                                testing the quality parameters such as active compounds, solvent residues,
                                moistures, heavy
                                metals, microbiology, pesticides and toxins.</p>
                        </div>

                        <figure>
                            <img src="./assets/images/Quality_3.png" className="img-fluid" className="img-fluid" alt=""/>
                            <figcaption><span>03.</span></figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityList;
