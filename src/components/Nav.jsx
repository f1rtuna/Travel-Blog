import React from "react"
import Globe from "../assets/globe.jpg"
import '../App.css'

function Nav(){
    return (
        <nav className = "navbar">
            <img className = "logo_img" src={Globe} alt="globe" />
            <p>My travel Journal</p>
        </nav>
    )
}

export default Nav