import React from 'react';
import ContentLoader from "react-content-loader";

const ProductsLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={360}
            height={400}
            viewBox="0 0 360 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="446" y="496" rx="0" ry="0" width="41" height="0" />
            <rect x="38" y="282" rx="0" ry="0" width="30" height="2" />
            <rect x="2" y="3" rx="0" ry="0" width="360" height="228" />
            <rect x="6" y="245" rx="0" ry="0" width="192" height="36" />
            <rect x="13" y="300" rx="0" ry="0" width="114" height="27" />
            <rect x="13" y="352" rx="0" ry="0" width="408" height="17" />
            <rect x="14" y="379" rx="0" ry="0" width="408" height="17" />
        </ContentLoader>
    );
};

export default ProductsLoader;
