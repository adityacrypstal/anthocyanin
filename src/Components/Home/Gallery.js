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
            <div id="pro-listing" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    {gallery && gallery.map((data, i) => (
                        <div className={`carousel-item ${i == 0 ? 'active' : null}`} key={i}>

                                <div className="carousel-caption container gallery-caption text-left">
                                    <div className="col-md-6 col-sm-6 col-12">
                                    <h3><span>{data.title}</span>
                                        {data.subtitle}
                                    </h3>
                                    <a href={data.link}>View Details <img src="./assets/images/linkicon-white.png"
                                                                          alt="View Details"/></a>
                                    </div>
                                </div>

                            <div className="position-relative gallery-slideImg">
                                <img src={data.image} className="img-fluid" alt="Los Angeles" />
                            </div>
                        </div>))}
                </div>
            </div>
            {/*<div className="carousel-control">*/}
            {/*    <a className="carousel-control-prev" href="#pro-listing" data-slide="prev">*/}
            {/*        <img src="./assets/images/w-arrow-left.png" alt="arrow"/>*/}
            {/*    </a>*/}
            {/*    <a className="carousel-control-next" href="#pro-listing" data-slide="next">*/}
            {/*        <img src="./assets/images/w-arrow-right.png" alt="arrow"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </section>
    );
};

export default Gallery;
