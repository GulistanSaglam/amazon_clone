import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './CheckoutProduct.css'
import { useStateValue } from '../ContextAPI/StateProvider';

function CheckoutProduct({ id, title, image, price, rating, }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarOutlinedIcon className='product__star' />
                        ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct