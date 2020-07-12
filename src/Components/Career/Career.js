import React, {Component} from 'react';
import PageOne from "./Form/PageOne";
import PageTwo from "./Form/PageTwo";
import PageThree from "./Form/PageThree";
import Success from "./Form/Success";

class Career extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        currentAddress: '',
        permanentAddress: '',
        gender: 'male',
        citizen: '',
        motherTongue: '',
        town: '',
        district: '',
        state: '',
        religon: '',
        language: '',
        file:null,
        marital: "married",
        no_children: "",
        spouse_name: "",
        physical_challenges: "",
        epidemic: "",
        allergic: "",
        mother_name: "",
        father_name: "",
        mother_address: "",
        father_address: "",
        degree:"phd_spcl",
        s10_mark: "",
        s10_percent: "",
        s10_clg: "",
        s10_passingout: "",
        s12_mark: "",
        s12_percent: "",
        s12_clg: "",
        s12_passingout: "",
        degree_mark: "",
        degree_percent: "",
        degree_clg: "",
        degree_passingout: "",
        pg_mark: "",
        pg_percent: "",
        pg_clg: "",
        pg_passingout: "",
        phd_clg: "",
        phd_passingout: "",
        refer_person: "",
        refer_contact: "",
        refer_person2: "",
        refer_contact2: "",
        company_name1: "",
        company_period: "",
        comapny_designation: "",
        company_keyresponsibility1: "",
        company_name2: "",
        company_period2: "",
        comapny_designation2: "",
        company_keyresponsibility2: "",
        company_name3: "",
        company_period3: "",
        comapny_designation3: "",
        company_keyresponsibility3: "",
        refer_person_position: "",
        refer_person2_position: "",
        sign:null
    }
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    fileChange = (event) =>{
            this.setState({ file: event.target.files[0] });
    }
    signChange = (event) =>{
            this.setState({ sign: event.target.files[0] });
    }
    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return <PageOne
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={this.state}
                    fileChange ={this.fileChange}
                />;
            case 2:
                return <PageTwo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={this.state}
                />;
            case 3:
                return <PageThree
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    prevStep={this.prevStep}
                    values={this.state}
                />;
            case 4:
                return <Success
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    submit={this.submit}
                    signChange={this.signChange}
                    values={this.state}/>
        }
    }
}

export default Career;
