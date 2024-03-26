import React from 'react'
import "./Subtotal.css"
import { useStateValue } from '../ContextAPI/StateProvider'
import { getBasketTotal } from '../ContextAPI/reducer';
function Subtotal() {

    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>
            <div>
                <p>Subtotal ({basket.length} items):  </p>
                <strong>€ {getBasketTotal(basket)}</strong>
            </div>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal