import React from 'react';
import Header from "./Header";

const Success = (props) => {
    return (
        <div className={'container'}>
            <Header one={'done'} two={'done'} three={'done'} four={'editing'}/>
            <form className={'mx-5 container'}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">YKey Responsibility</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Key Responsibility"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Key Responsibility</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Key Responsibility"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Key Responsibility</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Key Responsibility"/>

                    </div>
                </div>

                <div className={'my-5'}>
                    <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                    <button type="button" className="btn btn-light" onClick={() => props.nextStep()}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Success;
