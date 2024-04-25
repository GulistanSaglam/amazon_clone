import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../ContextAPI/StateProvider';


function Header() {

    const [{ basket },] = useStateValue();

    console.log(basket);

    return (
        <nav className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt='headerLogo'
                />
            </Link>

            <div className='header__search'>
                <input type="text" className='header__searchInput'></input>
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='headerNav'>
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello G</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header