import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom" 

function  ProductsComp() {

    let navigate = useNavigate();
    
    const [products,setProducts] = useState([])

    useEffect( () => {
        axios.get("https://dummyjson.com/products")
        .then( (res) => { setProducts(res.data.products) } )
    
    } , [] )

  return (
      <>
    <h1 style={{ textAlign : "center" , marginTop : "30px" }} > Products </h1>
    <div id = {styles.productWrapper} >

        {products.map( (product,i) => {
          return (
          <div className=  {styles.productCard} onClick = {() => 
            navigate(`/products/${product.id}`)  } >
              <img 
              className =  {styles.productImage}
              src = {product.thumbnail}
              />
              <h2> {product.title} </h2>
              <p> Price : <b>{product.price} $</b> </p>
              <p> Rating : <b> {product.rating} / 5 </b> </p>
            </div>)
        } )  }
       
    </div>
    </>
  )
}

export default  ProductsComp