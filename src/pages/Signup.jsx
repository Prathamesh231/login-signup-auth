import React, {useEffect, useRef}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'


function Signup() {
const registerForm = useRef(null)
const {user ,registerUser} = useAuth()
const navigate=useNavigate();


const handleSubmit = async(e)=>{
    e.preventDefault()

    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if(password1!=password2)
    {
        alert("Password did not matched")
        return 
    }

    const userInfo ={name,email,password1,password2}
    const success= registerUser(userInfo);
    if(success)
    {
        navigate('/')
    }
}
    return (
        <div className="container">
            <div className="login-register-container">
                <form ref={registerForm} onSubmit={handleSubmit}>

                <div className='form-field-wrapper'>
                    <label >Name :</label>
                    <input 
                        type="text" 
                        name='name'
                        required    
                    />
                </div>
                <div className="form-field-wrapper">
                    <label >Email : </label>
                    < input 
                        required
                        type="email" 
                        name="email"
                        placeholder="Enter email..."
                    />
                </div>
                <div className='form-field-wrapper'>
                    <label >Password :</label>
                    <input 
                        type="password" 
                        name='password1'
                        required    
                    />
                </div>
                <div className='form-field-wrapper'>
                    <label >Re-enter Password :</label>
                    <input 
                        type="password" 
                        name='password2'
                        required    
                    />
                </div>
                
                <div className='form-field-wrapper'>
                    <input 
                        type="submit" 
                        value="Register" 
                        className="btn" />
                </div>

                </form>
                <p>Already Have an account <Link to="/login">Login</Link> </p>
            </div>
        </div>
    )
}

export default Signup
