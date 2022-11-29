import { Card } from "./Card";
import movies from "./movies.json";
import styles from "./Grid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { useLocation } from "react-router-dom";

function useQuery (){
  return new URLSearchParams(useLocation().search);
}

export function Grid(){
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);//diferente

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setisLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
    get (searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false);//diferente
    })
      .then((data) => {
      setMovies(data.results);
    });
}, 
[search]);

if(isLoading){//diferente

  return <div className ={styles.load}>Loading...</div>;//diferente

}//diferente

    return (
      <ul className = {styles.Mgrid}>
        {movies.map((movie) => 
            <Card key = {movie.id} movie={movie}/>
        )}
      </ul>
    );
}