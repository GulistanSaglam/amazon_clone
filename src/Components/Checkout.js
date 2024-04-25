import React from 'react'
import Header from './Header';
import { useStateValue } from '../ContextAPI/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket },] = useStateValue();

    return (
        <>
            <Header />
            <div className='checkout'>
                <div>
                    <img
                        className='checkout__ad'
                        src='https://images-fe.ssl-images-amazon.com/images/G/35/GiftCards/BM_AU_POSA_banner.jpg'
                        alt='checkout_ad'
                    />

                    {basket?.length === 0 ? (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket is empty</h2>
                            <p className='checkout__p'>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket</h2>
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {basket.length > 0 && (
                    <div className='checkout__right'>
                        <Subtotal />
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout