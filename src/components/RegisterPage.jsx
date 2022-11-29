import styles from "./RegisterPage.module.css";
import { useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import { App } from "../App";
import { LoginPage } from "./LoginPage";
import { Link, Route } from "react-router-dom";
import { Login } from "../Pages/Login";

export function RegisterPage(){
    const [buscar, setbuscar] = useState("");
    const history = useHistory();
    const Submit = (e) => {
        e.preventDefault();
        history.push("/?search=" + buscar)
    }

    const [username, setusername] = useState("");
    const [link, setlink] = useState("");
    


    return(
        <form className = {styles.contenedor} onSubmit = {Submit} >
            <div className={styles.cajas1}>
                <input className={styles.input} type="text" placeholder="Enter your name"/>
                <p >username</p>
            </div>
            <div className={styles.cajas2}>
                <input className={styles.input} type="password" placeholder="Enter your password" />
                <p>password</p>
            </div>

            <div className={styles.cajas3}>
                <input className={styles.input} type="password" placeholder="Re-enter your password" />
                <p></p>
            </div>

            <div className={styles.cajas4}>
                <button className={styles.boton}>
                <Link to = "/Login">
                   <p className={styles.texto}>Go to login</p>
                </Link>
                <main>
                <Switch>
                        <Route path = "/Login"><Login /></Route>
                </Switch>
                </main>
                </button>


                <p></p>
            </div>
        </form>
    )
}