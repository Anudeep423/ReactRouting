import React from 'react'
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function Navbar({ setIsloggedIn, isLoggedIn }) {

    function RenderButton() {
        if (isLoggedIn == true) {
            return <button
            style={{ backgroundColor : "red" }}
            onClick={() => { 
                localStorage.setItem("isLoggedIn",false)
                setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn"))) }  } > Logout </button>
        } else {
            return <button 
            style={{ backgroundColor : "green" }}
            onClick={() => { 
                
                localStorage.setItem("isLoggedIn",true)
                setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))  }  } > Login </button>
        }
    }

    return (
        <header className={styles.header} >
            <Link to="/" > Home  </Link>
            <Link to="/products" > Products  </Link>
            <Link to="/about" > About  </Link>
            <RenderButton />
        </header>
    )
}

export default Navbar