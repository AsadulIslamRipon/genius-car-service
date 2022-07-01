import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigateLogin = () =>{
        navigate('/login')
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        console.log('Updated profile');
        navigate('/home');

    }
    return (
        <div className='form-container'>
            <SocialLogin></SocialLogin>
            <h1 className='text-primary text-center p-2'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" required/>
                <input type="email" name="email" placeholder='Your email address' id="" required/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <input onClick={ () =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions?</label>
                <input 
                disabled={!agree}
                className='btn btn-primary w-50 mx-auto mt-3' 
                type="submit" 
                value="register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;