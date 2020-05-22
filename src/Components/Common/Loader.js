import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Load from 'react-loader-spinner'

const Loader = ({loading}) => {
    return (
        <div>
            <Load
                type="Circles"
                color="#478b19"
                height={100}
                width={100}
                style={{marginTop:"200px",marginLeft:'43%'}}

            />
        </div>
    );
};

export default Loader;
