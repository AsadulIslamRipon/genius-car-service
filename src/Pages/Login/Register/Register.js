import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();


    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='form-container'>
            <h1 className='text-primary text-center p-2'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" required/>
                <input type="email" name="email" placeholder='Your email address' id="" required/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <input type="submit" value="register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;