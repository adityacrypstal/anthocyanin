import React from 'react';
import Header from "./Header";

const Success = (props) => {
    return (
        <div>
            <Header one={'done'} two={'done'} three={'done'} four={'editing'}/>
            <div className="jumbotron">
                
            </div>
            <button type="button" className="btn btn-light" onClick={()=>props.prevStep()}>PREV</button>
            <button type="button" className="btn btn-light" onClick={()=>props.prevStep()}>SUBMIT</button>
        </div>
    );
};

export default Success;
