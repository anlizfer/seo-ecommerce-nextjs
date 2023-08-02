import Hero from './components/Hero';
import styles from './page.module.css'

import React,{lazy,Suspense} from "react";
const ProductSection =lazy(()=> import("./components/ProductSection"));

const Home=()=>{  

  return(
    <>     
    
            <Hero></Hero>   
            <Suspense fallback={<div>...Loading...</div>}>
                <ProductSection colorBackground={"#eeeeee"} type="Featured"></ProductSection>            
            </Suspense>
            
            <ProductSection type="Promo"></ProductSection>

    </>
  )
}

export default Home;

//amazigtshirt4u.com/terms-of-use

/*
import Hero from "../Components/Hero";
import React,{lazy,Suspense} from "react";


//import ProductSection from "../Components/ProductSection";
import EcommerceTemplate from "../Templates/EcommerceTemplate";

const ProductSection =lazy(()=> import("../Components/ProductSection"));


const Home =()=>{
    return(
        <EcommerceTemplate>
            <Hero></Hero>   
            <Suspense fallback={<div>...Loading...</div>}>
                <ProductSection colorBackground={"#eeeeee"} type="Featured"></ProductSection>            
            </Suspense>
            
            <ProductSection type="Promo"></ProductSection>
        </EcommerceTemplate>
    )
}

export default Home

*/