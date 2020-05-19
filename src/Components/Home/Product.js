import React from 'react';
import OwlCarousel, {create} from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useDispatch, useSelector} from "react-redux";
import categoryAction from '../../redux/Category/actions';
import ProductLoader from '../../Helpers/ProductLoader'

const Product = () => {
    const {initialCategory, categories,loading} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    React.useEffect(() => {
            dispatch(categoryAction.getCategories());
    }, [dispatch, initialCategory]);
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
            items: 4,
            dots:false
        }
    }
    return (
        <section className="products">
            <div className="container">
                <h3 className="head-title"><span>Anthocyanin</span> Products</h3>
                <p>We committed passionately to bring nature’s purest offerings in the way of Spice oleoresins,
                    Essential
                    oils, Natural colours, Fragrance and so on.</p>
                <div className="mt-20" id="products-slider">
                    <div className="">
                        <div className="w-100">
                            {categories.length ? (
                                    <OwlCarousel  className="owl-carousel owl-theme products-slider-wapper" responsive={owl}>
                                        {categories.map((data, i) => (
                                            <div className="item" key={i}>
                                                <div>
                                                    <img src={data.image} className="img-fluid" alt="product_1"/>
                                                    <h3>{data.title}</h3>
                                                    <p>{truncate(data.description)}</p>
                                                </div>

                                                <a href={`/category/${data.id}`}>MORE</a>
                                            </div>
                                        ))}
                                    </OwlCarousel>) :
                                <OwlCarousel responsive={owl} className="owl-carousel owl-theme products-slider-wapper">
                                    <div className="item" >
                                        <ProductLoader />
                                    </div>
                                    <div className="item" >
                                        <ProductLoader />
                                    </div>  <div className="item" >
                                        <ProductLoader />
                                    </div>
                                    <div className="item">
                                        <ProductLoader/>
                                    </div>
                                </OwlCarousel>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
