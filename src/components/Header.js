import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <Link to="Home">Home</Link>  {'    '}
            <Link to="Products">Product</Link>
        </nav>
    )
}