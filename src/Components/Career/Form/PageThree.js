import React from 'react';
import Header from "./Header";

const PageThree = (props) => {
    return (
        <div className={'container'}>
            <Header one={'done'} two={'done'} three={'editing'}/>
            <form className={'mx-5 container'}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Mark</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Percentage</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Year of Passing out"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Mark</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Percentage</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Year of Passing out"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Mark</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Percentage</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" id="Last Name "
                               placeholder="Year of Passing out"/>

                    </div>
                </div>

                <div className={'my-5'}>
                    <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                    <button type="button" className="btn btn-light" onClick={() => props.nextStep()}>NEXT</button>
                </div>
            </form>
        </div>
    );
};

export default PageThree;
