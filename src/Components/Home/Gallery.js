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
                    {gallery ? (<div id="pro-listing" className="carousel slide " data-ride="carousel">
                        <div className="carousel-inner">
                            {gallery.map((data,i)=>(
                                <div className={`carousel-item ${i==0 ? 'active' : ''}`} key={i}>
                                    <div className="carousel-caption gallery-caption text-left">
                                        <h3><span>{data.title}</span>
                                            {data.subtitle}”
                                        </h3>
                                        <a href={data.href}>View Details <img src="/assets/images/linkicon-white.png"
                                                                      alt="View Details"/></a>
                                    </div>
                                    <div className="position-relative gallery-slideImg">
                                        <img src={data.img} className="img-fluid" alt="Los Angeles"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>) : <Loader/>}
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
    );
};

export default Gallery;
