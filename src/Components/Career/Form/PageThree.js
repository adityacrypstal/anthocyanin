import React, {useState} from 'react';
import Header from "./Header";
import swal from "sweetalert";

const is_required = (value, min, max) => {
    if (!value || value.length < min || value.length > max) {
        return 'Required Field'
    } else {
        return ''
    }
}

const PageThree = (props) => {
    const [state, setState] = useState({
        s10_mark: "",
        s10_percent: "",
        s10_clg: "",
        s10_passingout: "",
        s12_mark: "",
        s12_percent: "",
        s12_clg: "",
        s12_passingout: "",
    })
    const validate = () => {
        return state.s10_mark === '' && state.s10_percent === '' && state.s10_clg === '' && state.s10_passingout === '' &&
            state.s12_mark === '' && state.s12_percent === '' && state.s12_clg === '' && state.s12_passingout === '';
    }
    const values = () => {
        return props.values.s10_mark === '' || props.values.s10_percent === '' || props.values.s10_clg === '' || props.values.s10_passingout === '' ||
            props.values.s12_mark === '' || props.values.s12_percent === '' || props.values.s12_clg === '' || props.values.s12_passingout === '';
    }
    const next = () => {
        if (!values()) {
            props.nextStep()
        } else {
            swal({
                title: "Oops",
                text: "Please Fill All The Required Fields!",
                icon: "error",
                buttons: false,
                timer: 2000
            });

        }

    }
    const validator = (e) => {
        setState({
            ['is_' + e.target.name]: is_required(e.target.value, 2, 20)
        })
    }
    return (
        <div className={'container'}>
            <Header one={'done'} two={'done'} three={'editing'}/>
            <form className={'mx-5 container'}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Mark</label>
                            <input type="email" className="form-control" name={'s10_mark'} value={props.values.s10_mark}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="10th Mark (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Percentage</label>
                            <input type="email" className="form-control" name={'s10_percent'} value={props.values.s10_percent}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="10th Percentage (Required)" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" name={'s10_clg'} value={props.values.s10_clg}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="College (Required)"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" name={'s10_passingout'} value={props.values.s10_passingout}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Year of Passing out (Required)"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Mark</label>
                            <input type="email" className="form-control" name={'s12_mark'} value={props.values.s12_mark}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="12th Mark (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Percentage</label>
                            <input type="email" className="form-control" name={'s12_percent'} value={props.values.s12_percent}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="12th Percentage (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" name={'s12_clg'} value={props.values.s12_clg}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="College (Required)"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" name={'s12_passingout'} value={props.values.s12_passingout}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Year of Passing out (Required)"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Degree Mark</label>
                            <input type="email" className="form-control" name={'degree_mark'} value={props.values.degree_mark}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Degree Percentage (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Degree Percentage</label>
                            <input type="email" className="form-control" name={'degree_percent'} value={props.values.degree_percent}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Degree Percentage (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" name={'degree_clg'} value={props.values.degree_clg}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="College (Required)"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" name={'degree_passingout'} value={props.values.degree_passingout}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Year of Passing out (Required)"/>

                    </div>
                </div>

                <div className={'my-5'}>
                    <button type="button" className="btn btn-light" onClick={() => next()}>PREV</button>
                    <button type="button" className="btn btn-light" onClick={() => props.nextStep()}>NEXT</button>
                </div>
            </form>
        </div>
    );
};

export default PageThree;
