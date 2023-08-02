"use client"
import React,{useContext, useEffect} from 'react';
import Image from 'next/image'
import Logo from '../assets/Images/logo.png'
import ImgCart from '../assets/Images/shopping-cart.png';
import {MyContext} from '../hooks/MyContext';

const Header = () => {    
    //const {CountCart,setCountCart} = useContext(MyContext);

    useEffect(()=>{
        let carritoData= JSON.parse(localStorage.getItem("cart"));//PUEDE SER REEMPLAZADO POR LA API DE MI
        if(carritoData){
            //setCountCart(carritoData.length)
        }
        
    },[])
    

    return (
        <header>

            <div className='navbar navbar-dark navbar-custom'>
                <div className='container-fluid'>
                    <div className='row' style={{ width: "100%" }}>
                        <div className='col-md-2'>
                            <a className="navbar-brand" href="/">
                                <Image className="logo" alt='Logo Amazing Tshirt 4U' src={Logo} />
                            </a>
                        </div>

                        <div className='col-md-8 text-center'>
                            <button type="button" className="btn btn-outline-light btn-explorer">Explorer</button>
                            <button type="button" className="btn btn-aparel" style={{ marginLeft: "15px" }}>Apparel</button>
                        </div>

                        <div className='col-md-2 text-end'>
                            <a href='../cart' className='btn btn-light' aria-label='Go to cart page'>
                                <Image className='icono-cart' alt='Icon Cart' src={ImgCart}></Image> 
                                Carrito {/*CountCart*/}
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header