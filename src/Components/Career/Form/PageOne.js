import React, {useState} from 'react';
import Header from "./Header";
import swal from "sweetalert";

const is_required = (value,min,max) =>{
    if(!value||value.length<min||value.length>max){
        return 'Required Field'
    }else{
        return ''
    }
}

const PageOne = (props) => {
    const [state,setState] = useState({
        is_firstName:'',
        is_lastName:'',
        is_currentAddress:'',
        is_permanentAddress:'',
        is_phone:'',
        is_email:'',
        is_citizen:'',
        is_motherTongue:'',
        is_town:'',
        is_district:'',
        is_state:'',
        is_religon:'',
        is_language:'',
        filename:''
    })
    const validate =() =>{
        return state.is_firstName===''&&state.is_lastName===''&&state.is_currentAddress===''&&state.is_permanentAddress===''&&state.is_phone===''&&
            state.is_email===''&&state.is_citizen===''&&state.is_motherTongue===''&&state.is_town===''&&state.is_district===''&&
            state.is_state===''&&state.is_religon===''&&state.is_language==='';
    }
    const values =() =>{
        return props.values.firstName===''||props.values.lastName===''||props.values.currentAddress===''||props.values.permanentAddress===''||props.values.phone===''||
            props.values.email===''||props.values.citizen===''||props.values.motherTongue===''||props.values.town===''||props.values.district===''||
            props.values.state===''||props.values.religon===''||props.values.language==='';
    }
    const next = () => {
        if (!values()){
            props.nextStep()
        }else{
            swal({
                title: "Oops",
                text: "Please Fill All The RequiredFields!",
                icon: "error",
                buttons:false,
                timer:2000
            });
        }

    }
    const validator = (e) =>{
        setState({
            ['is_'+e.target.name]:is_required(e.target.value,2,20)
        })
    }
    return (
        <div className={'container'}>
            <Header one={'editing'}/>
            <form className={'mx-5'}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">First Name<sup>*</sup></label>
                            <input type="text" className="form-control" name={"firstName"}
                                   onChange={e => {props.handleChange(e);validator(e)}} value={props.values.firstName}
                                   placeholder="Enter First Name (Required)"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Last Name<sup>*</sup></label>
                            <input type="text" className="form-control" name={'lastName'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Enter Last Name (Required)" value={props.values.lastName}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Current Address<sup>*</sup></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                      name={'currentAddress'} onChange={e => {props.handleChange(e);validator(e)}}
                                      value={props.values.currentAddress} placeholder={"Required"}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Permanent Address<sup>*</sup></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                      name={'permanentAddress'} onChange={e => {props.handleChange(e);validator(e)}}
                                      value={props.values.permanentAddress} placeholder={"Required"}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Phone Number<sup>*</sup></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="+91 9567682232 (Required)" value={props.values.phone} name={'phone'}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email<sup>*</sup></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="name@example.com (Required)" value={props.values.email} name={'email'}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Gender<sup>*</sup></label>
                            <select className="form-control" id="exampleFormControlSelect1" name={'gender'}
                                    value={props.values.gender} onChange={e => {props.handleChange(e);validator(e)}}>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Citizenship<sup>*</sup></label>
                            <input type="email" className="form-control" id="Indian" name={'citizen'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Citizenship (Required)" value={props.values.citizen}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Mother Tongue<sup>*</sup></label>
                            <input type="email" className="form-control" id="Hindi" name={'motherTongue'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Mother Tongue (Required)" value={props.values.motherTongue}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Town/Village<sup>*</sup></label>
                            <input type="email" className="form-control" id="Indian" name={'town'}
                                   onChange={e =>{ props.handleChange(e);validator(e)}}
                                   placeholder="Town/Village (Required)" value={props.values.town}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">District<sup>*</sup></label>
                            <input type="email" className="form-control" id="Indian" name={'district'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="District (Required)" value={props.values.district}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">State<sup>*</sup></label>
                            <input type="email" className="form-control" id="Hindi" name={'state'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="State (Required)" value={props.values.state}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Religion/Caste<sup>*</sup></label>
                            <input type="email" className="form-control" id="Indian" name={'religon'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Religon (Required)" value={props.values.religon}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Language Known<sup>*</sup></label>
                            <input type="email" className="form-control" id="Indian" name={'language'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Language Known (Required)" value={props.values.language}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="exampleFormControlInput1">Upload your photo</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" name={'file'} required onChange={e => {props.fileChange(e);setState({...state,filename:e.target.files[0].name})}}/>
                            <label className="custom-file-label"
                                   htmlFor="validatedCustomFile">{state.filename}</label>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-light my-5" onClick={() => next()}>NEXT</button>

            </form>
        </div>
    );
};

export default PageOne;
