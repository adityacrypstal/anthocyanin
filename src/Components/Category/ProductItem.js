import React from 'react';
import ProductsLoader from "../../Helpers/productsLoader";

const ProductItem = ({products}) => {
    const truncate = (str) =>{
        return str.length > 85 ? str.substring(0, 79) + "..." : str;
    }
    return (
        <div className="row">
            {products? (products.map((data,i)=>(
                <div className="col-md-4" key={i}>
                    <div className="card post-items">
                        <img className="card-img-top img-fluid" src={data.img} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title"><a
                                href="curcumin.html"><span>{data.title}</span> {data.subtitle}</a></h4>
                            <p className="card-text">
                                {truncate(data.desc)}
                            </p>

                        </div>
                    </div>
                </div>
            ))):<div className={"row"}>
                <div className="col-md-4"><ProductsLoader/></div>
                <div className="col-md-4"><ProductsLoader/></div>
                <div className="col-md-4"><ProductsLoader/></div>
            </div>}
        </div>
    );
};

export default ProductItem;
