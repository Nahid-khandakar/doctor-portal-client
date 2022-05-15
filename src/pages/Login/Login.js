import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user)
    }
    if (error) {
        console.error(error)
    }

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <div className="divider">OR</div>


                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;