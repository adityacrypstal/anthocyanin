import React from 'react';
import {useRouteMatch, useParams} from 'react-router-dom';
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";
import categoryAction from "../../redux/Category/actions";
import { withRouter } from "react-router-dom";
import CategoryLoader from "../../Helpers/categoryLoader";
import {Markup} from "interweave";

const Category = () => {
    const match = useRouteMatch();
    const {id} = useParams() || 0
    const {loading, selectedCategory} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (id) {
            dispatch(categoryAction.getCategory(id));
        }
    }, [dispatch, id]);
    return (
        <div>
            <div className="breadcrumb-wapper">
                <div className="container">
                    <div className="row ">
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

            <div className="productListwapper oleoresins">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            {selectedCategory&&!loading ? (<div className="product-header">
                                <h4 className="header-title">{selectedCategory&&selectedCategory.title}</h4>
                                {selectedCategory?<Markup content = {selectedCategory.description}></Markup>:null}
                            </div>):<CategoryLoader/>}
                        </div>
                        <ProductItem products ={selectedCategory&&selectedCategory.products} loading={loading}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Category);
