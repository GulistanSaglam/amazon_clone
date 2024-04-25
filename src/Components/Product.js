import React from 'react'
import './Product.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useStateValue } from '../ContextAPI/StateProvider';

function Product({ id, title, image, price, rating }) {

    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className='product' key={id}>

            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>€</small>
                    <strong> {price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <StarOutlinedIcon className='product__star' />
                        ))}
                </div>
            </div>

            <img src={image} alt='image' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product