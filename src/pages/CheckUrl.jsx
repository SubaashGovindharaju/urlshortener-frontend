import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { backendUrl } from "../config";
import styles from './Verify.module.css';


const CheckUrl = () => {

    const [params,] = useSearchParams();
    // const navigate = useNavigate();
    const verifyUser = async () => {
        const Response = await fetch(`${backendUrl}/auth/checkurl`, {
            method: 'PUT',
            body: JSON.stringify({ resetKey: params.get('reset'),count:"1" }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
 
        const data = await Response.json();
        const data1 = data[0].Url
      
        if (Response.status === 200) {
            // alert('Login Success');
            return data1;
        } else {
            alert('Login fail');
        }
    }

    const url = async () => {
        const data = await verifyUser();
        window.location.href = data;



    }
    useEffect(() => {
        verifyUser();
        url();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    return (
        <div className={styles.box}>
            <h1 className={styles.h1}>VERIFYING THE URL</h1>
            <div className={styles.center}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
        </div>
    )

}


export default CheckUrl;