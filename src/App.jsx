import { Grid } from "./components/Grid";
import styles from "./App.module.css";
import React from "react";
import {BrowserRouter as Router,Route,Link, Switch} from "react-router-dom"; 
import { Details } from "./Pages/Details";
import { LPage } from "./Pages/LPage";
import { Login } from "./Pages/Login";
import { useState } from "react";
import { Register } from "./Pages/Register";


export function App(){
    return (
     <Router>
        <header>
            <Link to = "/">
                 <h1 className = {styles.title}>Movies</h1>
            </Link>
            <Link to = "/Login">
            <p>Login</p>
            </Link>
            <Link to = "/Register">
            <p>Register</p>
            </Link>
        </header>
        <main>
          <Switch>
            
            <Route exact path="/movies/:movieId"><Details /></Route>
            <Route path = "/Register"><Register /></Route>
            <Route path = "/Login"><Login /></Route>
            <Route path="/"><LPage /></Route>
            
          </Switch>
        </main>
     </Router>
    );
}
