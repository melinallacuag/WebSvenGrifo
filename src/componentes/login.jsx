import React from 'react';
import { Component } from "react";
import logo from '../img/logo_app.png';
import { TextField, Button } from '@mui/material';

class Login extends Component{

    constructor(props){

        super(props);

            this.state = {

                username: '',
                password: '',
                errorUsername: '',
                errorPassword: '',
                successMessage: '',

            };

    }

    validateForm() {

        let isValid = true;
      
        /* 
        *Validación de usuario
        */

        if (this.state.username.trim() === '') {

            this.setState({ errorUsername: 'Ingresar usuario' });
            isValid = false;
         
        } else if (this.state.username !== 'usuario@example.com') {

            this.setState({ errorUsername: 'Usuario incorrecto' });
            isValid = false;

        }else {

            this.setState({ errorUsername: '' });

        }

        /* 
        *Validación de contraseña
        */
         
        if (this.state.password.trim() === '') {

            this.setState({ errorPassword: 'Ingresar contraseña' });
            isValid = false;
          
        } else if (this.state.password.length < 8) {

            this.setState({ errorPassword: 'La contraseña debe tener al menos 8 caracteres' });
            isValid = false;

        }else if (this.state.password !== 'password') {

            this.setState({ errorPassword: 'Contraseña incorrecto' });
            isValid = false;

        } else {

            this.setState({ errorPassword: '' });

        }
      
        return isValid;

    }

    handleUsernameChange = (e) => {

        this.setState({ username: e.target.value, errorUsername: '' });

    }

    handlePasswordChange = (e) => {

        this.setState({ password: e.target.value, errorPassword: '' });

    }

    handleSubmit  = (e) => {

        e.preventDefault();

        if (this.validateForm()) {

            this.setState({ successMessage: "Inicio de sesión exitoso" });

            setTimeout(() => {

                this.setState({ successMessage: "" });

                window.location.href = "/dashboard"

            }, 3000);
       
        }
    }

    render(){
        
        const { username, password, errorUsername, errorPassword,successMessage  } = this.state;

        return(

            <div className="App">

                <header className="App-header">

                    <div className="login-container">

                        <img src={logo} className="App-logo" alt="logo" />
                
                        <h2 className='App-titulo' gutterBottom>INICIAR SESIÓN</h2>

                        <form  onSubmit={this.handleSubmit}>

                                {(errorUsername || errorPassword) && (

                                    <div className="error-container">

                                        {errorUsername && <p className="error-message">{errorUsername}</p>}
                                        {errorPassword && <p className="error-message">{errorPassword}</p>}
                                        
                                    </div>

                                )}

                                <TextField type="text" value={username} onChange={this.handleUsernameChange}  margin="normal" label="Usuario" fullWidth/>

                                <TextField type="password" value={password} onChange={this.handlePasswordChange} margin="normal" label="Contraseña" fullWidth />

                                <h2 className='App-titulo' gutterBottom>IMEI</h2>

                                <Button  variant="contained" color="primary"  type="submit">Iniciar Sesión</Button>

                                {successMessage && (
                                    
                                    <div className="success-container">

                                        {successMessage  && <p className="success-message">{successMessage}</p>}
                                
                                    </div>

                                )} 

                        </form >
                            
                    </div>

                </header>
            
            </div>

        );
    }

}
export default Login;