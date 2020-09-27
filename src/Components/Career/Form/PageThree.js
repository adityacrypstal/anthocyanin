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
        degree: "phd_spcl",
        s10_mark: "",
        s10_percent: "",
        s10_clg: "",
        s10_passingout: "",
        s12_mark: "",
        s12_percent: "",
        s12_clg: "",
        s12_passingout: "",
        pg_mark: "",
        pg_percent: "",
        pg_clg: "",
        pg_passingout: "",
        phd_mark: "",
        phd_percent: "",
        phd_clg: "",
        phd_passingout: "",
    })
    const validate = () => {
        return state.s10_mark === '' && state.s10_percent === '' && state.s10_clg === '' && state.s10_passingout === '' &&
            state.s12_mark === '' && state.s12_percent === '' && state.s12_clg === '' && state.s12_passingout === '';
    }
    const values = () => {
        return props.values.degree === '' || props.values.s10_mark === '' || props.values.s10_percent === '' || props.values.s10_clg === '' || props.values.s10_passingout === '' ||
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
       <div>
           <Header one={'done'} two={'done'} three={'editing'}/>
           <div className={'container'}>
               <form className={'container'}>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">10th Course Name<sup>*</sup></label>
                               <input type="email" className="form-control" name={'s10_name'} value={props.values.s10_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">10th Mark<sup>*</sup></label>
                               <input type="email" className="form-control" name={'s10_mark'} value={props.values.s10_mark}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">10th Percentage<sup>*</sup></label>
                               <input type="email" className="form-control" name={'s10_percent'}
                                      value={props.values.s10_percent}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution<sup>*</sup></label>
                           <input type="email" className="form-control" name={'s10_clg'} value={props.values.s10_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out<sup>*</sup></label>
                           <input type="email" className="form-control" name={'s10_passingout'}
                                  value={props.values.s10_passingout}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>
                   <hr/>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">12th Course Name<sup>*</sup></label>
                               <input type="text" className="form-control" name={'s12_name'} value={props.values.s12_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                          validator(e)
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">12th Mark<sup>*</sup></label>
                               <input type="text" className="form-control" name={'s12_mark'} value={props.values.s12_mark}
                                      onChange={e => {
                                          props.handleChange(e);
                                          validator(e)
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">12th Percentage<sup>*</sup></label>
                               <input type="text" className="form-control" name={'s12_percent'}
                                      value={props.values.s12_percent}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution<sup>*</sup></label>
                           <input type="text" className="form-control" name={'s12_clg'} value={props.values.s12_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out<sup>*</sup></label>
                           <input type="text" className="form-control" name={'s12_passingout'}
                                  value={props.values.s12_passingout}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>
                   <hr/>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Degree Course Name</label>
                               <input type="text" className="form-control" name={'degree_name'}
                                      value={props.values.degree_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Degree Mark</label>
                               <input type="text" className="form-control" name={'degree_mark'}
                                      value={props.values.degree_mark}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Degree Percentage</label>
                               <input type="text" className="form-control" name={'degree_percent'}
                                      value={props.values.degree_percent}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution</label>
                           <input type="text" className="form-control" name={'degree_clg'} value={props.values.degree_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                           <input type="text" className="form-control" name={'degree_passingout'}
                                  value={props.values.degree_passingout}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>
                   <hr/>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Diploma / ITI Course</label>
                               <input type="text" className="form-control" name={'diploma_name'}
                                      value={props.values.diploma_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Diploma / ITI  Mark</label>
                               <input type="text" className="form-control" name={'diploma_mark'}
                                      value={props.values.diploma_mark}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Diploma / ITI Percentage</label>
                               <input type="text" className="form-control" name={'diploma_percent'}
                                      value={props.values.diploma_percent}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution</label>
                           <input type="text" className="form-control" name={'diploma_clg'} value={props.values.diploma_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                           <input type="text" className="form-control" name={'diploma_passing_out'}
                                  value={props.values.diploma_passing_out}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>
                   <hr/>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">PG Course Name</label>
                               <input type="text" className="form-control" name={'pg_name'} value={props.values.pg_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">PG Mark</label>
                               <input type="text" className="form-control" name={'pg_mark'} value={props.values.pg_mark}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-2">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">PG Percentage</label>
                               <input type="text" className="form-control" name={'pg_percent'}
                                      value={props.values.pg_percent}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=""/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution</label>
                           <input type="text" className="form-control" name={'pg_clg'} value={props.values.pg_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                           <input type="text" className="form-control" name={'pg_passingout'}
                                  value={props.values.pg_passingout}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>
                   <hr/>
                   <div className="row">
                       <div className="col-md-3">
                           <div className="form-group">
                               <label htmlFor="exampleFormControlTextarea1">Ph.D Specialization</label>
                               <input type="text" className="form-control" name={'phd_name'} value={props.values.phd_name}
                                      onChange={e => {
                                          props.handleChange(e);
                                      }}
                                      placeholder=" "/>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <label htmlFor="exampleFormControlTextarea1">Institution</label>
                           <input type="text" className="form-control" name={'phd_clg'} value={props.values.phd_clg}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                       <div className="col-md-2">
                           <label htmlFor="exampleFormControlTextarea1">Year of Passing out</label>
                           <input type="text" className="form-control" name={'phd_passingout'}
                                  value={props.values.phd_passingout}
                                  onChange={e => {
                                      props.handleChange(e);
                                  }}
                                  placeholder=""/>

                       </div>
                   </div>

                   <div className={'my-5 controller'}>
                       <button type="button" className="btn btn-light" onClick={() => props.prevStep()}>PREV</button>
                       <button type="button" className="btn btn-light" onClick={() => next()}>NEXT</button>
                   </div>
               </form>
           </div>
       </div>
    );
};

export default PageThree;
