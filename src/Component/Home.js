import React from 'react';
import {Form, Button, Container, Header, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render(){
        var styleContainer={
            "margin-top":"30px",
            "height": "300px",
            "margin-bottom":"30px"
        }
        var stylePadding={
            "padding":"20px",
            "border-radius": "5px"
        }
        return (
            <Container style={styleContainer}>
            <Header className={'teal-text'} huge>
                    <Icon name='home' />
                    Home
            </Header>
            <div className={'card-pannel z-depth-5 deep-purple'} style={stylePadding}>
                <p>
                    <Link style={{display: 'block', height: '100%'}} to="/login">
                        Login 
                    </Link>
                </p>
                <p>
                    Or 
                </p>
                <p>
                    <Link style={{display: 'block', height: '100%'}} to="/signup" >
                        Sign Up 
                    </Link>
                </p>
            </div>
            </Container>  
        );
    }
}