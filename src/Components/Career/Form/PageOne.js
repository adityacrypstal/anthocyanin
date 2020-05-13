import React from 'react';
import Header from "./Header";

const PageOne = (props) => {
    return (
        <div>
            <Header one={'editing'}/>
            Pge One
            <button type="button" className="btn btn-light" onClick={()=>props.nextStep()}>NEXT</button>
        </div>
    );
};

export default PageOne;
