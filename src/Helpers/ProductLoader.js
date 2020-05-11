import React from 'react';
import ContentLoader from "react-content-loader";

const ProductLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={190}
            height={380}
            viewBox="0 0 200 380"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="110" cy="84" r="85" />
            <rect x="54" y="182" rx="0" ry="0" width="106" height="14" />
            <rect x="27" y="271" rx="0" ry="0" width="172" height="15" />
            <rect x="63" y="327" rx="21" ry="21" width="87" height="30" />
            <rect x="19" y="242" rx="0" ry="0" width="186" height="15" />
            <rect x="28" y="210" rx="0" ry="0" width="159" height="15" />
        </ContentLoader>
    );
};

export default ProductLoader;
