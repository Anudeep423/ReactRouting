import React , {Fragment,useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./styles.css"
import  Navbar from "./Navbar" 
import Home from './Home'
import ProductsComp from "./Products"
import About from './About'
import ProductSpec from './ProductSpec'

function App() {

  useEffect( () => {
    if( JSON.parse(localStorage.getItem("isLoggedIn")) == null ){
      localStorage.setItem("isLoggedIn",false)
    }
  },[] )

  const [isLoggedIn,setIsloggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))

  return (
    <Fragment >
      <BrowserRouter>
      <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />
      <Routes>
        <Route path = "/"  element = {<Home />}  />
        <Route path = "/products"  element = { isLoggedIn == true ? <ProductsComp /> : <Navigate to = "/" /> }  />
        <Route path = "/products/:productId"  element = { isLoggedIn == true ? <ProductSpec /> : <Navigate to = "/" /> }  />
        <Route path = "/about"  element = { isLoggedIn == true ? <About /> : <Navigate to = "/" /> }  />
        <Route  path = "*" element = {<h1 style={{ textAlign : "center" }} > 404 Page not found </h1>}  />
      </Routes>
      </BrowserRouter>
    </Fragment>
    ) 
}

export default App