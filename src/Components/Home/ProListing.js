import React from 'react';
import OwlCarousel from "react-owl-carousel";
import ProductLoader from "../../Helpers/ProductLoader";
import {useDispatch, useSelector} from "react-redux";
import newsAction from "../../redux/News/actions";

const ProListing = () => {
    const {initialNews, news,loading} = useSelector(state => state.news);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(newsAction.getNews());
    }, [dispatch, initialNews]);
    const truncate = (str) =>{
        if(str) return str.length > 60 ? str.substring(0, 56) + "..." : str;
    }
    const owl = {
        0: {
            items: 1,
            dots:true
        },
        480: {
            items: 2,
            dots:true
        },
        768: {
            items: 3,
            dots:false
        }
    }
    return (
        <section className="pro-listing">
            <div className="container">
                <div className="row">
                        {news.length ? (
                                <OwlCarousel responsive={owl} className="owl-carousel owl-theme products-slider-wapper">
                                    {news.map((data, i) => (
                                        <div className="item" key={i}>
                                            <div>
                                                <img src={data.image} className="img-fluid" alt="product_1"/>
                                                <p className={'mt-1'}>{data.subtitle}</p>
                                                <h3 >{data.title}</h3>
                                                <p>{truncate(data.description)}</p>
                                            </div>

                                            <a href={`/news/${data.id}`} className={'white'}>MORE</a>
                                        </div>
                                    ))}
                                </OwlCarousel>) :
                            <OwlCarousel responsive={owl} className="owl-carousel owl-theme products-slider-wapper" loop={true}>
                                <div className="item" >
                                    <ProductLoader />
                                </div>
                                <div className="item" >
                                    <ProductLoader />
                                </div>  <div className="item" >
                                <ProductLoader />
                            </div>
                            </OwlCarousel>}
                </div>
            </div>
        </section>
    );
};

export default ProListing;
