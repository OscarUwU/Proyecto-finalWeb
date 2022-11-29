import styles from "./Busqueda.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export function Busqueda(){
    const [buscar, setbuscar] = useState("");
    const history = useHistory();
    const Submit = (e) => {
        e.preventDefault();
        history.push("/?search=" + buscar)
    }


    return(
        <form className = {styles.contenedor} onSubmit = {Submit} >
            <div className={styles.caja}>
                <input className={styles.input} type="text" placeholder = "Search"value={buscar} onChange = {(e) => setbuscar(e.target.value)} />
                <button className={styles.boton} type = "submit">🔎</button>
            </div>
        </form>
    )
}