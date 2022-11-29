const API = "https://api.themoviedb.org/3";

export function get(path){
   return fetch(API + path, {
        headers: {
          Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWZiZWM4OTg0MGMyY2ViZDE0ZWRjNjkxNGE5NGE0ZCIsInN1YiI6IjYzN2MzOGVkNzEwODNhMDA3ZjUxMGQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uGoIEoBftFakpe-cPlxG7KKcoA_uPjmmS9rfhKDaoQ0",
          "Content-Type":  "application/json;charset = utf-8", 
  
        },
      })
        .then((result) => result.json())
}