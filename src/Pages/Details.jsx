import movie from "./movie.json";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function Details (){
    const { movieId } = useParams()
    const [isLoading, setisLoading] = useState(true);//diferente
    const [movie, setMovie] = useState(null);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const decrease = () => {
        setCount2 && setCount(count - 1);
    }
    const increase = () => {
        setCount2 && setCount(count + 1);
    }

    const resetear = () =>{
        setCount2 && setCount(count - count);
    }

    const aplicar = () =>{
        setCount2(count)
    }

    useEffect(() => {
        setisLoading(true);//diferente

        get("/movie/" + movieId).then(data => {
            setisLoading(false);
            setMovie(data);

        })
}, [movieId])

if(isLoading){//diferente
    return <div className ={styles.load}>Loading...</div>;//diferente
}//diferente

if (!movie) {
    return null;
}


    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className ={styles.detailsContainer}>
            <img className = {styles.col + " " + styles.Image} src={imageUrl} alt= {movie.title} />
            <div className = {styles.col + " " + styles.details}>
                <p className = {styles.firstItem}>
                    <strong>Title: </strong>{movie.title}
                </p>
                <p>
                    <strong>Genre: </strong>
                    {movie.genres.map(genre => genre.name).join(", ")}
                    </p>
                <p>
                    <strong>Description: </strong>{movie.overview}
                    </p>

                <p>Buy your tickets here</p>
                <button disabled={count <=0} className ={styles.boton}  onClick={decrease}>-</button>
                  <span>{count}</span>
                <button disabled={count >=10} className ={styles.boton}  onClick={increase}>+</button>
                <button onClick={resetear}  className ={styles.boton2}>Buy tickets</button>
                <div>{count2}</div>
                <br></br>
                
            </div>
        </div>
    )
}