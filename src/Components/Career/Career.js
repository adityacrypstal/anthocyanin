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
        age: '',
        city: '',
        country: ''
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    render() {
        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch(step) {
            case 1:
                return <PageOne
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 2:
                return <PageTwo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 3:
                return <PageThree
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 4:
                return <Success />
        }
    }
}

export default Career;
