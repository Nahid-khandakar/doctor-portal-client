import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user)
    }
    if (error) {
        console.error(error)
    }
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* for email */}
                        <div class="form-control w-full max-w-xs">

                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>

                            <input type="email"
                                placeholder="your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'Something error in email'
                                    }
                                })}
                            />


                            <label class="label">

                                {errors.email?.type === 'required' && <span class="label-text-alt text-amber-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-amber-600">{errors.email.message}</span>}

                            </label>
                        </div>



                        {/* for password */}
                        <div class="form-control w-full max-w-xs">

                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>

                            <input type="password"
                                placeholder="password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'use 6 digit '
                                    }
                                })}
                            />


                            <label class="label">

                                {errors.password?.type === 'required' && <span class="label-text-alt text-amber-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-amber-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input type="submit" className='btn text-white w-full' value='login' />
                    </form>


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