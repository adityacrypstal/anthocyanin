import React from 'react';
import ContentLoader from "react-content-loader";

const BlogLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={350}
            height={516}
            viewBox="0 0 350 516"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="446" y="496" rx="0" ry="0" width="41" height="0" />
            <rect x="0" y="3" rx="0" ry="0" width="350" height="244" />
            <rect x="28" y="268" rx="0" ry="0" width="106" height="16" />
            <rect x="38" y="282" rx="0" ry="0" width="30" height="2" />
            <rect x="227" y="267" rx="0" ry="0" width="93" height="16" />
            <rect x="28" y="323" rx="0" ry="0" width="105" height="20" />
            <rect x="28" y="356" rx="0" ry="0" width="209" height="19" />
            <rect x="26" y="399" rx="0" ry="0" width="283" height="12" />
            <rect x="27" y="418" rx="0" ry="0" width="283" height="12" />
            <rect x="27" y="437" rx="0" ry="0" width="283" height="12" />
            <rect x="27" y="457" rx="0" ry="0" width="283" height="12" />
        </ContentLoader>
    );
};

export default BlogLoader;
