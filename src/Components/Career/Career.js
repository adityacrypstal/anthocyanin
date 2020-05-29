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
        town:'',
        district:'',
        state:'',
        religon: '',
        language: '',
        image: '',
        marital:"",
        no_children:"",
        spouse_name:"",
        physical_challenges:"",
        epidemic:"",
        allergic:"",
        mother_name:"",
        father_name:"",
        mother_address:"",
        father_address:"",
        s10_mark:"",
        s10_percent:"",
        s10_clg:"",
        s10_passingout:"",
        s12_mark:"",
        s12_percent:"",
        s12_clg:"",
        s12_passingout:"",
        degree_mark:"",
        degree_percent:"",
        degree_clg:"",
        degree_passingout:"",
        refer_person:"",
        refer_contact:"",
        employment:[
            {
                company_name:"",
                company_period:"",
                comapny_designation:"",
                company_keyresponsibility:""
            },
            {
                company_name:"",
                company_period:"",
                comapny_designation:"",
                company_keyresponsibility:""
            },
            {
                company_name:"",
                company_period:"",
                comapny_designation:"",
                company_keyresponsibility:""
            }
        ]
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

    handleChange =  event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return <PageOne
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={this.state}
                />
            case 2:
                return <PageTwo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={this.state}
                />
            case 3:
                return <PageThree
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={this.state}
                />
            case 4:
                return <Success
                    prevStep={this.prevStep}
                    submit={this.submit}
                    values={this.state}/>
        }
    }
}

export default Career;
