import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import technologyActions from "../../redux/Technologies/actions";
import Loader from "../Common/Loader";

const Technology = () => {
    const {initialTechnology, technologies} = useSelector(state => state.technologies);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialTechnology) {
            dispatch(technologyActions.getTechnologies());
        }
    }, [dispatch, initialTechnology]);
    return (
        <section className="technology">
            <div className="container">
                <div id="technology-slider" className="carousel slide carousel-fade carouselslider"
                     data-ride="carousel">
                    <div className="carousel-inner">
                        {technologies ? (technologies.map((data,i) => (
                            <div className={`carousel-item ${i==0 ? 'active':''}`} key={i}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={data.url} className="img-fluid" alt="Los Angeles"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="carousel-caption text-left">
                                            <h3><span>{data.title}</span>
                                                {data.subtitle}</h3>
                                            <p>{data.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        )) : <Loader/>}
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
    );
};

export default Technology;
