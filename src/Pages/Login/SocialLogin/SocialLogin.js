import React from 'react';
import './SocialLogin.css';
import google from "../../../images/social/google.ico";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {useNavigate} from "react-router-dom";
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

      }

      if(user || user1){
        navigate('/home');
      }
    return (
        <div>
            <div>
                <button
                 
                 onClick={() =>signInWithGoogle()}
                 className='btn btn-info d-block mx-auto my-3 px-4'>
                    <img src={google} alt="" />
                    <span className='px-2 text-white h4'>Continue With Google </span>
                </button>
                {errorElement}
                <button className='btn btn-info d-block mx-auto my-3'>
                    <img style={{"width" : 30}} src={facebook} alt="" />
                    <span className='px-2 text-white h4'>Continue With Facebook </span>
                </button>
                <button onClick={ () =>signInWithGithub()} className='btn btn-info d-block mx-auto my-3 px-4 mb-5'>
                    <img src={github} alt="" />
                    <span className='px-3 text-white h4'>Continue With Github</span>
                </button>
            </div>
            <hr/>
        </div>
    );
};

export default SocialLogin;