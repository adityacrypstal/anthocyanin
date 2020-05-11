import React from 'react';
import ContentLoader from "react-content-loader";

const NewsLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={730}
            height={800}
            viewBox="0 0 730 800"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="6" y="4" rx="0" ry="0" width="770" height="478" />
            <rect x="446" y="496" rx="0" ry="0" width="41" height="0" />
            <rect x="9" y="504" rx="0" ry="0" width="181" height="17" />
            <rect x="8" y="536" rx="0" ry="0" width="340" height="23" />
            <rect x="12" y="587" rx="0" ry="0" width="709" height="14" />
            <rect x="12" y="713" rx="0" ry="0" width="709" height="14" />
            <rect x="10" y="613" rx="0" ry="0" width="709" height="14" />
            <rect x="10" y="638" rx="0" ry="0" width="709" height="14" />
            <rect x="12" y="664" rx="0" ry="0" width="709" height="14" />
            <rect x="12" y="688" rx="0" ry="0" width="709" height="14" />
            <rect x="13" y="744" rx="12" ry="12" width="161" height="40" />
        </ContentLoader>
    );
};

export default NewsLoader;
