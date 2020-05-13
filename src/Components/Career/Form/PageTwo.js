import React from 'react';
import Header from "./Header";

const PageTwo = (props) => {
    return (
        <div>
            <Header one={'done'} two={'editing'}/>
            PAge Two
            <button type="button" className="btn btn-light" onClick={()=>props.prevStep()}>PREV</button>
            <button type="button" className="btn btn-light" onClick={()=>props.nextStep()}>NEXT</button>
        </div>
    );
};

export default PageTwo;
