import React ,{useEffect, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'


function Login() {

        const {user , loginUser} =useAuth()
        const navigate = useNavigate()

        const loginForm =useRef(null)
        
        useEffect(()=>{
            if(user){
                navigate('/')
            }
        },[[user, navigate]])


        const handleSubmit =async(e)=>{
            e.preventDefault();
            const email = loginForm.current.email.value
            const password = loginForm.current.password.value

            const userInfo ={email,password}

            const success=await loginUser(userInfo);
            if(success){
                navigate('/')
            }
        }

  return (
    <div className='container'>
        <div className='login-register-container'>
            <form ref={loginForm} onSubmit={handleSubmit}>
                <div className='form-field-wrapper'>
                    <label >Email : </label>
                    <input 
                        type="email"
                        name='email'
                        placeholder='abc@gmail.com'
                        required
                    />
                </div>

                <div className='form-field-wrapper'>
                    <label >Password : </label>
                    <input 
                        type="password"
                        name='password'
                        required
                    />
                </div>

                <div className='form-field-wrapper'>
                    <input 
                        
                        type="submit"
                        value="Login"
                        className='btn'
                     />
                </div>
            </form>

            <p>Don't have account ? <Link to="/signup">SignUp</Link></p>
        </div>
      
    </div>
  )
}

export default Login
