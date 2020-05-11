import React from 'react';
import Carousel from "./Carousel";
import Product from "./Product";
import Technology from "./Technology";
import Quality from "./Quality";
import Gallery from "./Gallery";
import QualityList from "./QualityList";
import ProListing from "./ProListing";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Product/>
            <Technology/>
            <Quality/>
            <QualityList/>
            <ProListing/>
            <Gallery/>

        </div>
    );
};

export default Home;
