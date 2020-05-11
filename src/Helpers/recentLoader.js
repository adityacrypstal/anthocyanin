import React from 'react';
import ContentLoader from "react-content-loader";

const RecentLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={350}
            height={80}
            viewBox="0 0 350 80"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="11" y="6" rx="0" ry="0" width="69" height="92" />
            <rect x="58" y="53" rx="0" ry="0" width="11" height="0" />
            <rect x="39" y="22" rx="0" ry="0" width="11" height="4" />
            <rect x="95" y="7" rx="0" ry="0" width="374" height="13" />
            <rect x="96" y="25" rx="0" ry="0" width="111" height="11" />
            <rect x="99" y="61" rx="0" ry="0" width="87" height="12" />
            <rect x="308" y="61" rx="0" ry="0" width="43" height="11" />
        </ContentLoader>
    );
};

export default RecentLoader;
