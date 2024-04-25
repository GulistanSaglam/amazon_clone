import React from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product';
import './Home.css';


function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <img
                    className='home__image'
                    src="https://techstory.in/wp-content/uploads/2024/01/primevideo-seo-logo.png" />

                <div className='home__row'>
                    <Product
                        id="1"
                        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        price="109.95"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="Mens Casual Premium Slim Fit T-Shirts"
                        image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        price="122.3"
                        rating={5}
                    />
                    <Product
                        id="3"
                        title="Mens Cotton Jacket"
                        image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        price="59.99"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title="Mens Casual Slim Fit"
                        image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                        price="15.99"
                        rating={5}
                    />
                    <Product
                        id="5"
                        title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
                        image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                        price="695"
                        rating={4}
                    />
                    <Product
                        id="6"
                        title="Solid Gold Petite Micropave "
                        image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                        price="168"
                        rating={3}
                    />
                    <Product
                        id="7"
                        title="White Gold Plated Princess"
                        image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                        price="9.99"
                        rating={2}
                    />
                    <Product
                        id="8"
                        title="Pierced Owl Rose Gold Plated Stainless Steel Double"
                        image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                        price="10.99"
                        rating={3}
                    />




                    <Product
                        id="9"
                        title="WD 2TB Elements Portable External Hard Drive - USB 3.0 "
                        image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                        price="69"
                        rating={4}
                    />
                    <Product
                        id="10"
                        title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s "
                        image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
                        price="109"
                        rating={3}
                    />
                    <Product
                        id="11"
                        title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
                        image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                        price="109"
                        rating={2}
                    />
                    <Product
                        id="12"
                        title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
                        image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                        price="114"
                        rating={3}
                    />
                </div>

            </div>

        </>
    )
}

export default Home