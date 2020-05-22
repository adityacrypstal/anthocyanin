import React from 'react';
import ContentLoader from "react-content-loader";

const NewsHomeLoader = () => {
    return (
        <div>
            <ContentLoader
                speed={1}
                width={342}
                height={114}
                viewBox="0 0 342 114"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="446" y="496" rx="0" ry="0" width="41" height="0" />
                <rect x="38" y="282" rx="0" ry="0" width="30" height="2" />
                <rect x="13" y="352" rx="0" ry="0" width="408" height="17" />
                <rect x="14" y="379" rx="0" ry="0" width="408" height="17" />
                <rect x="1" y="6" rx="0" ry="0" width="342" height="19" />
                <rect x="1" y="41" rx="0" ry="0" width="342" height="10" />
                <rect x="3" y="58" rx="0" ry="0" width="342" height="10" />
                <rect x="2" y="76" rx="0" ry="0" width="342" height="10" />
                <rect x="4" y="92" rx="0" ry="0" width="59" height="20" />
            </ContentLoader>
        </div>
    );
};

export default NewsHomeLoader;
