import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import galleryAction from "../../redux/Gallery/actions";
import Loader from "../Common/Loader";

const Gallery = () => {
    const {initialGallery, gallery} = useSelector(state => state.gallery);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialGallery) {
            dispatch(galleryAction.getGallery());
        }
    }, [dispatch, initialGallery]);
    return (
        <section className="gallery">
            <div className="container">
                <div className="col-lg-10 galler-wrap col-md-11 col-sm-11 col-12 mx-auto">
                    <div id="pro-listing" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel-caption gallery-caption text-left">
                                    <h3><span>OUR GALLERY</span>
                                        We promote organic farming and have ”
                                    </h3>
                                    <a href="#">View Details <img src="/assets/images/linkicon-white.png"
                                                                  alt="View Details" /></a>
                                </div>
                                <div className="position-relative gallery-slideImg">
                                    <img src="/assets/images/gallery.png" className="img-fluid" alt="Los Angeles" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption gallery-caption text-left">
                                    <h3><span>OUR GALLERY</span>
                                        We promote chain of organic raw material.”
                                    </h3>
                                    <a href="#">View Details <img src="/assets/images/linkicon-white.png"
                                                                  alt="View Details" /></a>
                                </div>
                                <div className="position-relative gallery-slideImg">
                                    <img src="/assets/images/gallery.png" className="img-fluid" alt="Los Angeles" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption gallery-caption text-left">
                                    <h3><span>OUR GALLERY</span>
                                        We promote organic farming and have strong supply chain of organic raw
                                        material.”
                                    </h3>
                                    <a href="#">View Details <img src="/assets/images/linkicon-white.png"
                                                                  alt="View Details" /></a>
                                </div>
                                <div className="position-relative gallery-slideImg">
                                    <img src="/assets/images/gallery.png" className="img-fluid" alt="Los Angeles" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-control">
                        <a className="carousel-control-prev" href="#pro-listing" data-slide="prev">
                            <img src="/assets/images/w-arrow-left.png" alt="arrow" />
                        </a>
                        <a className="carousel-control-next" href="#pro-listing" data-slide="next">
                            <img src="/assets/images/w-arrow-right.png" alt="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;