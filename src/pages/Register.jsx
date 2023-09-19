import {  useState } from 'react';
import { backendUrl } from '../config';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');

  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerResponse = await fetch(`${backendUrl}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ Firstname,Lastname,email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await registerResponse.json();
    console.log(data);
    handleReset();
    alert("Registerd");

    handleEmailCheck();
    navigate("/login");
   
  };


  const handleEmailCheck = async () => {
    const loginResponse = await fetch(`${backendUrl}/auth/regmail`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await loginResponse.json();
    if (loginResponse.status === 404) {
        alert('user not found');
    } else {
        alert("Activation Link is send to your mail");
        console.log(data.responceObj.email);
        handleReset();
        navigate("/login");
    }
};


  return (
    <div className={styles.outbox}>
      <div className={styles.container} id="container">
        <div className={`${styles.container} ${styles.logincontainer}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.head}>Register</h1>
            <span className={styles.span}>or <Link to={'/login'}>Sign In?</Link></span>
            <input className={styles.input} type="text" placeholder="Enter your Firstname" value={Firstname} onChange={handleFirstNameChange} required />
            <input className={styles.input} type="text" placeholder="Enter your Lastname" value={Lastname} onChange={handleLastNameChange} required />
            <input  className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
            <input  className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
            <Link to={'/EmailCheck'}>Forgot your password?</Link>
            <button className={styles.button} >Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
