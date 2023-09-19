import  { useState } from "react";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";
import styles from './EmailCheck.module.css';

const Url = () => {
    const [url, setUrl] = useState('');
   
    

const date=new Date();
// console.log(date)


    const handleEmailChange = (e) => {
        setUrl(e.target.value);
    };
    const navigate = useNavigate();

    const handleReset = () => {
        setUrl('');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = JSON.parse(localStorage.getItem('user'));
console.log(email)

        const loginResponse = await fetch(`${backendUrl}/auth/sendUrl`, {
            method: 'PUT',
            body: JSON.stringify({ email: email.email, Url: url,createdAt:date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (loginResponse.status === 404) {
            alert("Error in creating URL ");
        } else {
            alert('URL created');
            handleReset();
            navigate("/");
        }
    };


 
  
    return (
        <div className={styles.outbox}>
            <div className={styles.container} id="container">
                <div className={`${styles.container} ${styles.logincontainer}`}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.head}>URL <br />Shortener</h1>
                        <input className={styles.input} type="url" placeholder="Enter the URL" value={url} onChange={handleEmailChange} required />
                        <button className={styles.button}>Create</button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
}

export default Url;
