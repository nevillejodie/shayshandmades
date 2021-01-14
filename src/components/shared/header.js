import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import './header.css'


const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className="header">
            <Link className="text" to='/'>Store</Link>
            <Link className="text" to='/about'>About</Link>
            <Link className="text" to='/cart'> Cart ({itemCount})</Link>
        </header>
     );
}
 
export default Header;