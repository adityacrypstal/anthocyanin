import React from 'react';
import ProductsLoader from "../../Helpers/productsLoader";
import productAction from '../../redux/Product/actions'
import {useDispatch} from "react-redux";
import { withRouter,useHistory } from "react-router-dom";

const ProductItem = ({products}) => {
    const truncate = (str) =>{
        str = str.toString();
        str = str.replace(/<\/?[^>]+>/gi, '');
        if (str) return str.length > 85 ? str.substring(0, 100) + "..." : str;
    }
    let history = useHistory();

    const dispatch = useDispatch();
    return (
        <div className="row mx-0">
            {products? (products.map((data,i)=>(
                <div className="col-md-4 hover" key={i} onClick={()=>{dispatch({type:productAction.SET_PRODUCT,product:data});history.push(`/product/${data.id}`)}}>
                    <div className="card post-items">
                        <img className="card-img-top img-fluid" src={data.image} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title"><a><span>{data.title}</span> </a></h4>
                            <p className="card-text">
                                {truncate(data.description)}
                            </p>

                        </div>
                    </div>
                </div>
            ))):<div className={"row mb-30"}>
                <div className="col-md-4"><ProductsLoader/></div>
                <div className="col-md-4"><ProductsLoader/></div>
                <div className="col-md-4"><ProductsLoader/></div>

            </div>}
        </div>
    );
};

export default withRouter(ProductItem);
