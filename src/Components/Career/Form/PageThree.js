import React from 'react';
import Header from "./Header";

const PageThree = (props) => {
    return (
        <div>
            <Header one={'done'} two={'done'} three={'editing'}/>
            PAge three
            <button type="button" className="btn btn-light" onClick={()=>props.prevStep()}>PREV</button>
            <button type="button" className="btn btn-light" onClick={()=>props.nextStep()}>NEXT</button>
        </div>
    );
};

export default PageThree;
