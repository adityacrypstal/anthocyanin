import React from 'react';

const Product = () => {
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
                                    <div className="teamImg" style={{background: 'url("/assets/images/spices2.png")'}}>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="ourteam-txt ">
                                        <h4 className="header-title"><span>Black pepper </span> Oleoresin</h4>
                                        <ul>
                                            <li>Black pepper has been deemed the “King of spices”, it has been a
                                                very popular spice for seasoning and flavouring.
                                            </li>
                                            <li>Black pepper belongs to the family of piperaceae, cultivated for its
                                                fruit,
                                                known as pepper corn.
                                            </li>
                                            <li>Black pepper oleoresin is obtained by the solvent extraction of
                                                ground-dried
                                                ripened seed of black pepper.
                                            </li>
                                            <li>The flavour is slightly warm and pleasant initially, followed by a
                                                pungent,
                                                biting sensation.
                                            </li>
                                            <li>Its spiciness is due to the chemical compound piperine.</li>
                                            <li>According to Ayurveda, black pepper is excellent for folk medicines to
                                                cure
                                                several illness, such as constipation, insomnia, oral abscesses,
                                                sunburn,
                                                and
                                                toothache.
                                            </li>
                                            <li>Black pepper is a very versatile house hold spice for Asians since
                                                ancient
                                                times
                                                to enhance the flavour of savoury dishes.
                                            </li>
                                            <li>It can also use as a tasty seasoning for cooked vegetables, pasta,
                                                dishes,
                                                meat,
                                                fish, poultry and many more.
                                            </li>
                                        </ul>
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
