import React, {useState} from 'react';
import Header from "./Header";

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
    })
    const validate =() =>{
        return state.is_firstName===''&&state.is_lastName===''&&state.is_currentAddress===''&&state.is_permanentAddress===''&&state.is_phone===''&&
            state.is_email===''&&state.is_citizen===''&&state.is_motherTongue===''&&state.is_town===''&&state.is_district===''&&
            state.is_state===''&&state.is_religon===''&&state.is_language==='';
    }
    const next = () => {
        if (validate())
            props.nextStep()
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
                            <label htmlFor="exampleFormControlInput1">First Name</label>
                            <input type="text" className="form-control" name={"firstName"}
                                   onChange={e => {props.handleChange(e);validator(e)}} value={props.values.firstName}
                                   placeholder="Enter First Name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Last Name</label>
                            <input type="text" className="form-control" name={'lastName'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Enter Last Name" value={props.values.lastName}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Current Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                      name={'currentAddress'} onChange={e => {props.handleChange(e);validator(e)}}
                                      value={props.values.currentAddress}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Permanent Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                      name={'permanentAddress'} onChange={e => {props.handleChange(e);validator(e)}}
                                      value={props.values.permanentAddress}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Phone Number</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="+91 9567682232" value={props.values.phone} name={'phone'}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="name@example.com" value={props.values.email} name={'email'}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Gender</label>
                            <select className="form-control" id="exampleFormControlSelect1" name={'gender'}
                                    value={props.values.gender} onChange={e => {props.handleChange(e);validator(e)}}>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Citizenship</label>
                            <input type="email" className="form-control" id="Indian" name={'citizen'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Citizership" value={props.values.citizen}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Mother Tongue</label>
                            <input type="email" className="form-control" id="Hindi" name={'motherTongue'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Mother Tongue" value={props.values.motherTongue}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Town/Village</label>
                            <input type="email" className="form-control" id="Indian" name={'town'}
                                   onChange={e =>{ props.handleChange(e);validator(e)}}
                                   placeholder="Town/Village" value={props.values.town}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">District</label>
                            <input type="email" className="form-control" id="Indian" name={'district'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="District" value={props.values.district}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">State</label>
                            <input type="email" className="form-control" id="Hindi" name={'state'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="State" value={props.values.state}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Religion/Caste</label>
                            <input type="email" className="form-control" id="Indian" name={'religon'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Religon" value={props.values.religon}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Language Known</label>
                            <input type="email" className="form-control" id="Indian" name={'language'}
                                   onChange={e => {props.handleChange(e);validator(e)}}
                                   placeholder="Language Known" value={props.values.language}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="exampleFormControlInput1">Upload your photo</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required/>
                            <label className="custom-file-label"
                                   htmlFor="validatedCustomFile">{props.values.image}</label>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-light my-5" onClick={() => next()}>NEXT</button>

            </form>
        </div>
    );
};

export default PageOne;
