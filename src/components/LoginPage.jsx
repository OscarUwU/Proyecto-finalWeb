import styles from "./LoginPage.module.css";
import { useContext, useEffect, useState } from "react";
import { useHistory, Route, Switch, Link } from "react-router-dom";
import { App } from "../App";
import { LPage } from "../Pages/LPage"; 
import { loginUser } from "../Lpage,jsx";


export function LoginPage(){
    const [buscar, setbuscar] = useState("");
    const history = useHistory();
    const Submit = (e) => {
        e.preventDefault();
        history.push("/?search=" + buscar)
    }

    const [username, setusername] = useState(0);
    const context = useContext(App);
    const [password, setpassword] = useState(0);
    const [Error, setError] = useState("");
    const[showChild, setShowChild] = useState(false);

    /*useEffect(() => {
        if (context.stateUser.isAuthenticated === true){
            props.history.push("/")
        }
    })*/
    
    const handleSubmit = e => {
        const user = {
            username,
            password,
        };
        if(username === " " || password === " " ){
            setError("User or password are incorrect");
        }else{
            loginUser(user, context.dispatch, setError);
        }

        e.preventDefault();
    };

    return(
        <form className = {styles.contenedor} onSubmit = {handleSubmit} >
            <div className={styles.cajas1}>
                <input  Value ={username} onChange={e => setusername(e.target.value)} className={styles.input} type="text" placeholder="Enter your username"/>
                <p>username</p>
                const
                <script>
                    if 
                </script>
            </div>
            <div className={styles.cajas2}>
                <input Value ={password} onChange={e => setpassword(e.target.value)} className={styles.input} type="password" placeholder="Enter your password" />
                <p>password</p>
            </div>

            <div className={styles.cajas5}>

                <button disabled={username.length <= 4 ||  username.length ===0} className={styles.boton2}>
                {Error?<Error mensaje = {Error}/>:null}

                <Link to = "/Lpage" disabled={username.length <= 4}>
                   <p className={styles.texto}>Go to home</p>
                </Link>
                <main>
                <Switch>
                    <Route path = "/LPage">< LPage /></Route>
                </Switch>
                </main>
                </button>


                <p></p>
            </div>
        </form>
    )
}