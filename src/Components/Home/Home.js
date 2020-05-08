import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="minslider mt-25">
                <div id="minslider" className="carousel slide carousel-fade" data-ride="carousel">
                    <ul className="carousel-indicators d-none">
                        <li data-target="#minslider" data-slide-to="0" className="active"></li>
                        <li data-target="#minslider" data-slide-to="1"></li>
                        <li data-target="#minslider" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/images/mob_slider_1.png" className="mobile_view img-fluid" alt="slider_1"/>
                            <img src="/assets/images/slider_1.png" className="desktop_view img-fluid" alt="slider_1 /" />
                                <div className="container banner-caption">
                                    <div className="carousel-caption">
                                        <h3>Anthocyanin
                                            <span>Sense of Essence</span></h3>
                                        <a href="#">
                                            Read our story
                                            <img src="/assets/images/linkicon-white.png" alt="slider icons"/>
                                        </a>
                                    </div>
                                </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#minslider" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#minslider" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            <section className="products">
                <div className="container">
                    <h3 className="head-title"><span>Anthocyanin</span> Products</h3>
                    <p>We committed passionately to bring nature’s purest offerings in the way of Spice oleoresins,
                        Essential
                        oils, Natural colours, Fragrance and so on.</p>

                    <div className="mt-20" id="products-slider">
                        <div className="">
                            <div className="w-100">
                                <div className="owl-carousel owl-theme products-slider-wapper">
                                    <div className="item">
                                        <div>
                                            <img src="/assets/images/product_1.png" className="img-fluid" alt="product_1"/>
                                            <h3>Oleoresins</h3>
                                            <p>Oleoresins are pure and natural extracts of spices and herbs ...</p>
                                        </div>

                                        <a href="products.html">MORE</a>
                                    </div>
                                    <div className="item">
                                        <div>
                                            <img src="/assets/images/product_2.png" className="img-fluid" alt="product_1"/>
                                            <h3>Essential Oils</h3>
                                            <p>Essential oils are highly concentrated natural extracts...</p>
                                        </div>

                                        <a href="Essential.html">MORE</a>
                                    </div>
                                    <div className="item">
                                        <div>
                                            <img src="/assets/images/product_1.png" className="img-fluid" alt="product_1"/>
                                            <h3>Sample Category</h3>
                                            <p>Oleoresins are pure and natural extracts of spices and herbs ...</p>
                                        </div>

                                        <a href="products.html">MORE</a>
                                    </div>
                                    <div className="item">
                                        <div>
                                            <img src="/assets/images/product_2.png" className="img-fluid" alt="product_1"/>
                                            <h3>Sample Category</h3>
                                            <p>Essential oils are highly concentrated natural extracts...</p>
                                        </div>

                                        <a href="Essential.html">MORE</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technology">
                <div className="container">
                    <div id="technology-slider" className="carousel slide carousel-fade carouselslider"
                         data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/images/spices2.png" className="img-fluid" alt="Los Angeles"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="carousel-caption text-left">
                                            <h3><span>Anthocyanin</span>
                                                Technology & Innovation</h3>
                                            <p>Our technology can be easily customized for our value added customers,
                                                provides
                                                quick and reliable service that meet their expectations and demands with
                                                the
                                                support of modern machinery and advanced processing facility. Our
                                                skilled R & D
                                                team constantly provide innovative solution and supports for the benefit
                                                of our
                                                clients with impeccable quality and cost effective products. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/images/spices2.png" className="img-fluid" alt="Los Angeles"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="carousel-caption text-left">
                                            <h3><span>Antsdhocyanin</span>
                                                Technology & Innovation</h3>
                                            <p>Our technology can be easily customized for our value added customers,
                                                provides
                                                quick and reliable service that meet their expectations and demands with
                                                the
                                                support of modern machinery and advanced processing facility. Our
                                                skilled R & D
                                                team constantly provide innovative solution and supports for the benefit
                                                of our
                                                clients with impeccable quality and cost effective products. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 position-relative">
                                <div className="carousel-control">
                                    <a className="carousel-control-prev" href="#technology-slider" data-slide="prev">
                                        <img src="/assets/images/w-arrow-left.png" alt="arrow"/>
                                    </a>
                                    <a className="carousel-control-next" href="#technology-slider" data-slide="next">
                                        <img src="/assets/images/w-arrow-right.png" alt="arrow"/>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="quality">
                <div className="container">
                    <h3 className="title">Research & Development
                        <span>Quality control and Assurance</span>
                    </h3>
                    <p>We comply with international specific relevant statutory and regulatory requirements, and our
                        products
                        are well-known for its safety, value and quality. Fully equipped modern laboratory with
                        experienced and
                        veteran QC team are well versed in testing the quality parameters such as active compounds,
                        solvent
                        residues, moistures, heavy metals, microbiology, pesticides and toxins. </p>
                    <a href="#">More about Quality and Assurance <img src="/assets/images/linkicon.png" alt="more"/>
                    </a>
                </div>
            </section>
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
                                <img src="/assets/images/Quality_1.png" className="img-fluid" className="img-fluid" alt=""/>
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
                                <img src="/assets/images/Quality_2.png" className="img-fluid" className="img-fluid" alt=""/>
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
                                <img src="/assets/images/Quality_3.png" className="img-fluid" className="img-fluid" alt=""/>
                                <figcaption><span>03.</span></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pro-listing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>SORTING</h3>
                            <h6>LOREM IPSUM</h6>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor</p>
                        </div>
                        <div className="col-md-4">
                            <h3>GRINDING</h3>
                            <h6>LOREM IPSUM</h6>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor</p>
                        </div>
                        <div className="col-md-4">
                            <h3>SIEVING</h3>
                            <h6>LOREM IPSUM</h6>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery">
                <div className="container">

                    <div className="col-lg-10 galler-wrap col-md-11 col-sm-11 col-12 mx-auto">
                        <div id="pro-listing" className="carousel slide " data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-caption gallery-caption text-left">
                                        <h3><span>OUR GALLERY</span>
                                            We promote organic farming and have strong supply chain of organic raw
                                            material.”
                                        </h3>
                                        <a href="#">View Details <img src="/assets/images/linkicon-white.png"
                                                                      alt="View Details"/></a>
                                    </div>
                                    <div className="position-relative gallery-slideImg">
                                        <img src="images/gallery.png" className="img-fluid" alt="Los Angeles" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-caption gallery-caption text-left">
                                        <h3><span>OUR IMGES</span>
                                            testing”
                                        </h3>
                                        <a href="#">View Details <img src="/assets/images/linkicon-white.png"
                                                                      alt="View Details"/></a>
                                    </div>
                                    <div className="position-relative gallery-slideImg">
                                        <img src="/assets/images/gallery.png" className="img-fluid" alt="Los Angeles"/>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-control">
                            <a className="carousel-control-prev" href="#pro-listing" data-slide="prev">
                                <img src="/assets/images/w-arrow-left.png" alt="arrow"/>
                            </a>
                            <a className="carousel-control-next" href="#pro-listing" data-slide="next">
                                <img src="/assets/images/w-arrow-right.png" alt="arrow"/>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
);
};

export default Home;
