import React from 'react';
import {useSelector} from "react-redux";
import {Markup} from "interweave";
import { useHistory } from "react-router-dom";
import categoryAction from "../../redux/Category/actions";

const Product = () => {
    const history = useHistory();
    const {currentProduct} = useSelector(state => state.products);
    console.log(currentProduct);
    if(!Object.keys(currentProduct).length){
        console.log("going bavk");
        history.go('-1')
    }
    return (
        <div>
            <div className="breadcrumb-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3><span>Anthocyanin</span>
                                Sense of Essence</h3>
                        </div>
                        <div className="col-md-6">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="#">Home</a>
                                <span className="breadcrumb-item active">Product</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-wapper">
                <div className="container">
                    <div className="product-list overview-list">
                        <div className="pro-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="teamImg" style={{background: `url("${currentProduct.image}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="ourteam-txt ">
                                        <h4 className="header-title"><span>{currentProduct.subtitle} </span> {currentProduct.title}</h4>
                                        <Markup content = {currentProduct.description}></Markup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;
