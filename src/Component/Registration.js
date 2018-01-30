import React, {Component} from 'react';
import {Form, Button, Header,Icon, Container, Dropdown} from 'semantic-ui-react';
import Validator from 'validator';

class RegistrationForm extends Component {
    state = {
        data: {
            name: '',
            gender: '',
            preferedGender:'',
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e =>  
        this.setState({
            data: { ...this.state.data, [e.target.name]:e.target.value}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
    };
        
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Should be an email";
        if (!Validator.isEmpty(data.password)) errors.password = "Password should not be empty";
        return errors;
    };

    render(){
        var genderOptions = [
            {key: "male",
            value: "male",
            icon: "man",
            text: "Male"}, 
            {key: "female",
            value: "female",
            icon: "woman",
            text: "Female"},
            {key: "other",
            value: "other",
            icon: "other gender",
            text: "Other"},]
        var styleContainer={
            "margin-top":"30px",
            "margin-bottom":"30px"
        }
        var stylePadding={
            "padding":"20px"
        }
        const {data, errors} = this.state;
        return(
        <Container style={styleContainer}>
            <Header className={'teal-text'} huge>
                <Icon name='signup' />
                Registration 
            </Header>
        <div className={'card-pannel z-depth-5 deep-purple'} style={stylePadding}>
        <div className={'container'}>
        <Form onSubmit={this.onSubmit}>
            <Form.Input 
                error={!!errors.name}
                label="Name"
                name="name" 
                id="name" 
                type="text" 
                placeholder="Jane Q Yalie"
                value={data.name}
                onChange={this.onChange} />
            <Form.Dropdown label="Gender" placeholder='Select Gender' fluid selection options={genderOptions} />
            <Form.Dropdown label="Prefer Gender" placeholder='Select Gender of who you are interested in' fluid selection options={genderOptions} />
            <Form.Input 
                error={!!errors.email}
                label="Email" 
                name="email" 
                id="email" 
                type="email" 
                placeholder="jane.yalie@yale.com"
                value={data.email}
                onChange={this.onChange} />
            <Form.Input 
                error={!!errors.password}
                label="Password"
                name="password" 
                id="password" 
                type="password" 
                value={data.password}
                onChange={this.onChange} />
            <Button positive>
                Register
            </Button>
        </Form>
        </div>
        </div>
        </Container>
        );
    }
}

export default RegistrationForm;