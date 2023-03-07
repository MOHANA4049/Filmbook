import React from "react";
import './Homepage.css';
import About from "./about";
import { Link } from "react-router-dom";
function Homepage()
{
    return(
        <div className="ab" >
            <h1 align="center">FILM BOOK</h1>
            <About/>
            <Link to="/Get">
            <button class="button button1">GET DETAILS</button>
            </Link>
            <Link to="/Post">
            <button class="button button2">CREATE DETAILS</button>
            </Link>
            <Link to="/Update">
            <button class="button button3">UPDATE DETAILS</button>
            </Link>
           <button class="button button4">DELETE DETAILS</button>
        </div>
    )
}
export default Homepage;