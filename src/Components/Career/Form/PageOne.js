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

const PageOne = (props) => {
    const [state, setState] = useState({
        is_firstName: '',
        is_lastName: '',
        is_currentAddress: '',
        is_dob: '',
        is_permanentAddress: '',
        is_phone: '',
        is_email: '',
        is_citizen: '',
        is_motherTongue: '',
        is_town: '',
        is_district: '',
        is_state: '',
        is_religon: '',
        is_language: '',
        filename: null
    })
    const values = () => {
        return props.values.firstName === '' || props.values.lastName === '' || props.values.currentAddress === '' || props.values.permanentAddress === '' || props.values.phone === '' ||
            props.values.email === '' || props.values.citizen === '' || props.values.motherTongue === '' || props.values.town === '' || props.values.district === '' ||
            props.values.state === '' || props.values.religon === '' || props.values.language === '' || !props.values.file || !props.values.dob;
    }
    const next = () => {
        console.log(props.values.filename);
        if (!values()) {
            console.log(props.values.filename);
            props.nextStep()
        } else {
            swal({
                title: "Oops",
                text: "Please Fill All The RequiredFields!",
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
    };
    const today = () =>{
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }

        return yyyy+'-'+mm+'-'+dd;
    }
    return (
        <div>
            <Header one={'editing'}/>
            <div className={'container'}>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">First Name<sup>*</sup></label>
                                <input type="text" className="form-control" name={"firstName"}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }} value={props.values.firstName}
                                       placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Last Name<sup>*</sup></label>
                                <input type="text" className="form-control" name={'lastName'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.lastName}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Current Address<sup>*</sup></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                          name={'currentAddress'} onChange={e => {
                                    props.handleChange(e);
                                    validator(e)
                                }}
                                          value={props.values.currentAddress} placeholder={""}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Permanent Address<sup>*</sup></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                          name={'permanentAddress'} onChange={e => {
                                    props.handleChange(e);
                                    validator(e)
                                }}
                                          value={props.values.permanentAddress} placeholder={""}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Phone Number<sup>*</sup></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.phone}
                                       name={'phone'}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email<sup>*</sup></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.email}
                                       name={'email'}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Date Of Birth<sup>*</sup></label>
                                <input type="date" className="form-control" id="exampleFormControlInput1" max={today()}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.dob}
                                       name={'dob'}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Gender<sup>*</sup></label>
                                <select className="form-control" id="exampleFormControlSelect1" name={'gender'}
                                        value={props.values.gender} onChange={e => {
                                    props.handleChange(e);
                                    validator(e)
                                }}>
                                    <option value={"male"}>Male</option>
                                    <option value={"female"}>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Citizenship<sup>*</sup></label>
                                <input type="email" className="form-control" id="Indian" name={'citizen'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.citizen}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mother Tongue<sup>*</sup></label>
                                <input type="email" className="form-control" id="Hindi" name={'motherTongue'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.motherTongue}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Town/Village<sup>*</sup></label>
                                <input type="email" className="form-control" id="Indian" name={'town'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.town}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">District<sup>*</sup></label>
                                <input type="email" className="form-control" id="Indian" name={'district'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.district}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">State<sup>*</sup></label>
                                <input type="email" className="form-control" id="Hindi" name={'state'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.state}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Religion/Caste<sup>*</sup></label>
                                <input type="email" className="form-control" id="Indian" name={'religon'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.religon}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Language Known<sup>*</sup></label>
                                <input type="email" className="form-control" id="Indian" name={'language'}
                                       onChange={e => {
                                           props.handleChange(e);
                                           validator(e)
                                       }}
                                       placeholder="" value={props.values.language}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleFormControlInput1">Upload your photo<sup>*</sup></label>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="validatedCustomFile" name={'file'}
                                       required onChange={e => {
                                    props.fileChange(e);
                                    setState({...state, filename: e.target.files[0].name})
                                }}/>
                                <label className="custom-file-label"
                                       htmlFor="validatedCustomFile">{state.filename}</label>
                            </div>
                        </div>
                    </div>
                    <div className="controller">
                        <button type="button" className="btn btn-light my-5" onClick={() => next()}>NEXT</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default PageOne;
