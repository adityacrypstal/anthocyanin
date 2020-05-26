import React from 'react';
import Header from "./Header";

const PageTwo = (props) => {
    return (
        <div>
            <div className={'container'}>
                <Header one={'done'} two={'editing'}/>
                <form className={'mx-5 container'}>
                    <div className="row">
                        <div className="col-md-4">
                                <label htmlFor="exampleFormControlSelect1">Marital Status</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Married</option>
                                    <option>Single</option>
                                    <option>Divorced</option>
                                </select>

                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">No of Children</label>
                                <input type="email" className="form-control" id="Last Name "
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Spouse Name</label>
                                <input type="email" className="form-control" id="Last Name "
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Phsical Challenges</label>
                                <input type="email" className="form-control" id="Last Name "
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlTextarea1">Epidemic</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Spouce Name"/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlTextarea1">Allergic</label>
                            <input type="email" className="form-control" id="Last Name "
                                   placeholder="Spouce Name"/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mother Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Mother Name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Father Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Father Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mother Address</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Father Address</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>

                            </div>
                        </div>
                    </div>
                    <div className={'my-5'}>
                        <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                        <button type="button" className="btn btn-light" onClick={() => props.nextStep()}>NEXT</button>
                    </div>
                </form>
            </div>
            </div>);
  };

export default PageTwo;
