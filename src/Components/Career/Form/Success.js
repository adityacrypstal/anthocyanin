import React, {useState} from 'react';
import Header from "./Header";
import swal from "sweetalert";
import {format} from "./format";
import careerAction from "../../../redux/Career/actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const is_required = (value, min, max) => {
    if (!value || value.length < min || value.length > max) {
        return 'Required Field'
    } else {
        return ''
    }
}
const Success = (props) => {
    const dispatch = useDispatch();
    const {applying} = useSelector(state => state.careers)
    const {id} = useParams() || 0
    const submit = async () => {
        let data = format(props.values)
        data.career_id = id
        await dispatch(careerAction.apply(data))
    }
    const value = () => {
        return props.values.refer_person === '' || props.values.refer_person_position === ''|| props.values.refer_contact === ''||
            props.values.refer_person2 === '' || props.values.refer_person2_position === ''|| props.values.refer_contact2 === '';
        const next = () => {
            if (!value()) {
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

    }
    return (
        <div className={'container'}>
            <Header one={'done'} two={'done'} three={'done'} four={'editing'}/>
            <form className={'container'}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Person</label>
                            <input type="email" className="form-control" name={'refer_person'}
                                   value={props.values.refer_person}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Person (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Person Position</label>
                            <input type="email" className="form-control" name={'refer_person_position'}
                                   value={props.values.refer_person_position}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Person Position(Required)"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Contact</label>
                            <input type="email" className="form-control" name={'refer_contact'}
                                   value={props.values.refer_contact}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Contact (Required)"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Person</label>
                            <input type="email" className="form-control" name={'refer_person2'}
                                   value={props.values.refer_person2}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Person (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Person Position</label>
                            <input type="email" className="form-control" name={'refer_person2_position'}
                                   value={props.values.refer_person2_position}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Person Position (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Reference Contact</label>
                            <input type="email" className="form-control" name={'refer_contact2'}
                                   value={props.values.refer_contact2}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Reference Contact (Required)"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Experience</label>
                        <input type="email" className="form-control" name={'company_exp1'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_exp1}
                               placeholder="Experience"/>

                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" name={'company_name1'}
                                   value={props.values.company_name1}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" name={'company_period1'}
                                   value={props.values.company_period1}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" name={'comapny_designation1'}
                               value={props.values.comapny_designation1}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Key Responsibility</label>
                        <input type="email" className="form-control" name={'company_keyresponsibility1'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_keyresponsibility1}
                               placeholder="Key Responsibility"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Experience</label>
                        <input type="email" className="form-control" name={'company_exp2'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_exp2}
                               placeholder="Experience"/>

                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" name={'company_name2'}
                                   value={props.values.company_name2}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" name={'company_period2'}
                                   value={props.values.company_period2}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" name={'comapny_designation2'}
                               value={props.values.comapny_designation2}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Key Responsibility</label>
                        <input type="email" className="form-control" name={'company_keyresponsibility2'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_keyresponsibility2}
                               placeholder="Key Responsibility"/>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Experience</label>
                        <input type="email" className="form-control" name={'company_exp3'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_exp3}
                               placeholder="Experience"/>

                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Name of Company</label>
                            <input type="email" className="form-control" name={'company_name3'}
                                   value={props.values.company_name3}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Name of Company"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Designation</label>
                            <input type="email" className="form-control" name={'company_period3'}
                                   value={props.values.company_period3}
                                   onChange={e => {
                                       props.handleChange(e);
                                   }}
                                   placeholder="Designation"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="exampleFormControlTextarea1">Period</label>
                        <input type="email" className="form-control" name={'comapny_designation3'}
                               value={props.values.comapny_designation3}
                               onChange={e => {
                                   props.handleChange(e);
                               }}
                               placeholder="Period"/>

                    </div>
                    <div className="col-md-3">
                        <label htmlFor="exampleFormControlTextarea1">Key Responsibility</label>
                        <input type="email" className="form-control" name={'company_keyresponsibility3'}
                               onChange={e => {
                                   props.handleChange(e);
                               }} value={props.values.company_keyresponsibility3}
                               placeholder="Key Responsibility"/>

                    </div>
                </div>

                <div className={'my-5'}>
                    <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                    <button type="button" className="btn btn-light"
                            onClick={() => submit()}>{applying ? 'SUBMITTING' : 'SUBMIT'}</button>
                </div>
            </form>
        </div>
    );
};

export default Success;
