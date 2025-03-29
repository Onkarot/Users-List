import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();

        if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
            alert("Invalid email or password");
            return;
        }

        try{
            const response = await axios.post(`https://reqres.in/api/login`, {email, password})
            localStorage.setItem("token", email);
            navigate('/users')
        }

        catch(err){
            alert("Invalid email or password")
        }
    }

    return (
        <div class="container mt-5 center_div">
            <form class='form'>
                <h4 class="text-center">Login</h4>
                <div className='mt-4'>
                    <div class="mb-3">
                        <label for="email" class="form-label login-lable">Email address</label>
                        <input type="email" class="form-control" id="email" name='email' 
                        value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" required/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="password" class="form-label login-lable">Password</label>
                        <input type="password" class="form-control" id="password"
                        name='password' onChange={(e)=>setPassowrd(e.target.value)} required/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100 login-btn" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}


export default Login
