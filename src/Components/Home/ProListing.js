import React from 'react';
import OwlCarousel from "react-owl-carousel";
import ProductLoader from "../../Helpers/ProductLoader";
import {useDispatch, useSelector} from "react-redux";
import newsAction from "../../redux/News/actions";
import NewsHomeLoader from "../../Helpers/NewsHomeLoader";

const ProListing = () => {
    const {initialNews, news, loading} = useSelector(state => state.news);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(newsAction.getNews());
    }, [dispatch, initialNews]);
    const truncate = (str, l) => {
        str = str.toString();
        str = str.replace(/<\/?[^>]+>/gi, '');
        if (str) return str.length > l ? str.substring(0, l) + "..." : str;
    }
    const owl = {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 2,
            dots: true
        },
        768: {
            items: 3,
            dots: false
        }
    }
    return (
        <section className="pro-listing">
            <div className="container">
                <div className="row">
                    {loading ? (
                            <OwlCarousel responsive={owl} nav={false}className="owl-carousel owl-theme products-slider-wapper">
                                {news.map((data, i) => (
                                    <div className="item" key={i}>
                                        <div>
                                            {/*<img src={data.image} className="img-fluid" alt="product_1"/>*/}
                                            {/*<p className={'mt-1'}>{data.subtitle}</p>*/}
                                            <h3>{truncate(data.description, 30)}</h3>
                                            <p>{truncate(data.description, 56)}</p>
                                        </div>

                                        <a href={`/news/${data.id}`} className={'white'}>MORE</a>
                                    </div>
                                ))}
                            </OwlCarousel>) :
                        <OwlCarousel responsive={owl} className="owl-carousel owl-theme products-slider-wapper"
                                     loop={true}>
                            <div className="item">
                                <NewsHomeLoader/>
                            </div>
                            <div className="item">
                                <NewsHomeLoader/>
                            </div>
                            <div className="item">
                                <NewsHomeLoader/>
                            </div>
                        </OwlCarousel>}
                </div>
            </div>
        </section>
    );
};

export default ProListing;
