import React, {useState} from 'react';
import Header from "./Header";

const is_required = (value, min, max) => {
    if (!value || value.length < min || value.length > max) {
        return 'Required Field'
    } else {
        return ''
    }
}

const PageThree = (props) => {
    const [state, setState] = useState({
        s10_mark:"",
        s10_percent:"",
        s10_clg:"",
        s10_passingout:"",
        s12_mark:"",
        s12_percent:"",
        s12_clg:"",
        s12_passingout:"",
    })
    const validate = () => {
        return state.s10_mark === '' && state.s10_percent === '' && state.s10_clg === '' && state.s10_passingout === '' &&
            state.s12_mark === '' && state.s12_percent === '' && state.s12_clg === '' && state.s12_passingout === '';
    }
    const next = () => {
        if (validate())
            props.nextStep()
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
                            <input type="email" className="form-control" name={'s10_mark'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="10th Mark"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">10th Percentage</label>
                            <input type="email" className="form-control" name={'s10_percent'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="10th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control"name={'s10_clg'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control"name={'s10_passingout'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
                               placeholder="Year of Passing out"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Mark</label>
                            <input type="email" className="form-control" name={'s12_mark'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="12th Mark"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">12th Percentage</label>
                            <input type="email" className="form-control" name={'s12_percent'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="12th Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" name={'s12_clg'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" name={'s12_passingout'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
                               placeholder="Year of Passing out"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Degree Mark</label>
                            <input type="email" className="form-control" name={'degree_mark'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="Degree Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Degree Percentage</label>
                            <input type="email" className="form-control"name={'degree_percent'}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="Degree Percentage"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">College</label>
                        <input type="email" className="form-control" name={'degree_clg'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
                               placeholder="College"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                        <input type="email" className="form-control" name={'degree_passingout'}
                               onChange={e => {
                                   props.handleChange(e);
                                   validator(e)
                               }}
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
