import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Load from 'react-loader-spinner'

const Loader = ({loading}) => {
    return (
        <div style={style}>
            <img src={'./assets/images/loader.gif'} alt="" style={loaderStyle}/>
        </div>
    );
};
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
}
const loaderStyle = {
    width:"90px",
}
export default Loader;
