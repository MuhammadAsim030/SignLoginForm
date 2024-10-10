import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Form = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLogin ? 'Login form active' : 'Signup form active');
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log(`Logging in with Name: ${name}, Password: ${password}`);
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log(`Signing up with Name: ${name}, Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <div className=' item-center justify-center w-auto max-w-[100%] m-auto'>
      <div className='bg-gray-100 shadow-xl text-black w-[500px] text-center my-auto mx-auto items-center h-[500px]'>
      <h2 className=' text-blue-800 font-bold text-3xl mb-3 item-center'>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className='block'>
        <input 
          className='bg-gray-200 py-1 px-8 mb-2'
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          /><br></br>
        
        {!isLogin && (
          <input 
          className='bg-gray-200 py-1 px-8 mb-2'
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            />
          )}<br/>

        <input 
        className='bg-gray-200 py-1 px-8 mb-2'
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /><br/>
        <input 
        className='bg-gray-200 py-1 px-8 mb-2'
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
          /><br/>
          <input type="checkbox" className='flex mx-[130px]'/>
          <h5 className='inline flex mx-[130px]'>Remember me.</h5>
          

        <button type="submit" className='bg-blue-600 px-8 py-1 rounded-md text-white font-bold '>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <button onClick={() => setIsLogin(!isLogin)} className='underline'>
        {isLogin ? 'Create a new account' : 'Already have an account? Login'}
      </button>
          <div className="mt-10">
            <h3 className='mb-5'>Or continue with</h3>
            <button type='submit' className='bg-gray-200 mr-20 px-9 rounded-md'><FaGoogle /> Google</button>
            <button type='submit' className='bg-gray-200 rounded-md px-9 '><FaGithub /> Github</button>
          </div>
      </div>
    </div>
  );
};

export default Form;
