import React from 'react';
import ContentLoader from "react-content-loader";

const CategoryLoader = () => {
    return (
        <div><ContentLoader
            speed={1}
            width={1120}
            height={344}
            viewBox="0 0 1120 344"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="446" y="496" rx="0" ry="0" width="41" height="0"/>
            <rect x="38" y="282" rx="0" ry="0" width="30" height="2"/>
            <rect x="13" y="352" rx="0" ry="0" width="408" height="17"/>
            <rect x="14" y="379" rx="0" ry="0" width="408" height="17"/>
            <rect x="2" y="4" rx="0" ry="0" width="251" height="42"/>
            <rect x="0" y="76" rx="0" ry="0" width="1068" height="23"/>
            <rect x="-2" y="153" rx="0" ry="0" width="1068" height="23"/>
            <rect x="-5" y="280" rx="0" ry="0" width="1068" height="23"/>
            <rect x="-4" y="199" rx="0" ry="0" width="1068" height="22"/>
            <rect x="-4" y="239" rx="0" ry="0" width="1068" height="23"/>
            <rect x="2" y="115" rx="0" ry="0" width="1068" height="23"/>
        </ContentLoader>
        </div>
    );
};

export default CategoryLoader;
