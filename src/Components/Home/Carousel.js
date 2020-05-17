import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import carouselAction from '../../redux/Carousel/actions';
import Loader from "../Common/Loader";
const Carousel = () => {
    const {initialCarousel, carousels} = useSelector(state => state.carousels);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialCarousel) {
            dispatch(carouselAction.getCarousel());
        }
    }, [dispatch, initialCarousel]);
    return (
        <div className="minslider mt-25">
            <div id="minslider" className="carousel slide carousel-fade" data-ride="carousel">
                <ul className="carousel-indicators d-none">
                    <li data-target="#minslider" data-slide-to="0" className="active"></li>
                    <li data-target="#minslider" data-slide-to="1"></li>
                    <li data-target="#minslider" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    {
                        carousels ? carousels.map((data, i) => (
                            <div className={`carousel-item ${i == 0 ? 'active' : ''}`} key ={i}>
                                <img src={data.image} className="mobile_view img-fluid"
                                     alt="slider_1"/>
                                <img src={data.image} className="desktop_view img-fluid"
                                     alt="slider_1 /"/>
                                <div className="container banner-caption">
                                    <div className="carousel-caption">
                                        <h3>{data.title}
                                            <span>{data.subtitle}</span></h3>
                                        <a href={data.href}>
                                            Read our story
                                            <img src="./assets/images/linkicon-white.png" alt="slider icons"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )) : <div >
                                <Loader />
                        </div>
                    }

                </div>
                <a className="carousel-control-prev" href="#minslider" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#minslider" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    );
};
const style ={height:{height:"30vh"}}
export default Carousel;
