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
const PageTwo = (props) => {
    const [state, setState] = useState({
        is_marital: '',
        physical_challenges: '',
        epidemic: '',
        allergic: '',
        mother_name: '',
        father_name: '',
        mother_address: '',
        father_address: ''
    })
    const validate = () => {
        return state.is_marital === '' && state.physical_challenges === '' && state.epidemic === '' && state.allergic === '' &&
            state.mother_name === '' && state.father_name === '' && state.mother_address === '' && state.father_address === '';
    }
    const values = () => {
        return props.values.marital === '' || props.values.physical_challenges === '' || props.values.epidemic === '' || props.values.allergic === '' ||
            props.values.mother_name === '' || props.values.father_name === '' || props.values.mother_address === '' || props.values.father_address === '';
    }
    const next = () => {
        if (!values()){
            props.nextStep()
        }else{
            swal({
                title: "Oops",
                text: "Please Fill All The Required Fields!",
                icon: "error",
                buttons:false,
                timer:2000
            });
        }

    }
    const validator = (e) => {
        setState({
            ['is_' + e.target.name]: is_required(e.target.value, 2, 20)
        })
    }
    return (
        <div>
            <div className={'container'}>
                <Header one={'done'} two={'editing'}/>
                <form className={'container'}>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlSelect1">Marital Status</label>
                            <select className="form-control" name={'marital'} value={props.values.marital}
                                    onChange={e => {
                                        props.handleChange(e);
                                        validator(e)
                                    }}>
                                <option value={"married"}>Married</option>
                                <option value={"single"}>Single</option>
                                <option value={"divorced"}>Divorced</option>
                            </select>

                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">No of Children</label>
                                <input type="email" className="form-control" name={'no_children'} value={props.values.no_children}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Spouse Name</label>
                                <input type="email" className="form-control" name={'spouse_name'} value={props.values.spouse_name}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Phsical Challenges</label>
                                <input type="email" className="form-control" name={'physical_challenges'} value={props.values.physical_challenges}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="Spouce Name"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlTextarea1">Epidemic</label>
                            <input type="email" className="form-control" name={'epidemic'} value={props.values.epidemic}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="Epidemic (Required)"/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlTextarea1">Allergic</label>
                            <input type="email" className="form-control" name={'allergic'} value={props.values.allergic}
                                   onChange={e => {
                                       props.handleChange(e);
                                       validator(e)
                                   }}
                                   placeholder="Allergic (Required)"/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mother Name</label>
                                <input type="email" className="form-control" name={'mother_name'} value={props.values.mother_name}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="Mother Name (Required)"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Father Name</label>
                                <input type="email" className="form-control" name={'father_name'} value={props.values.father_name}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="Father Name (Required)"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mother Address</label>
                                <textarea className="form-control" name={'mother_address'} rows="2" placeholder={"Required"} onChange={e => {
                                    props.handleChange(e);
                                    validator(e)
                                }} value={props.values.mother_address}/>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Father Address</label>
                                <textarea className="form-control" name={'father_address'} rows="2" placeholder={"Required"} onChange={e => {
                                    props.handleChange(e);
                                    validator(e)
                                }} value={props.values.father_address}/>

                            </div>
                        </div>
                    </div>
                    <div className={'my-5'}>
                        <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                        <button type="button" className="btn btn-light" onClick={() => next()}>NEXT</button>
                    </div>
                </form>
            </div>
        </div>);
};

export default PageTwo;
