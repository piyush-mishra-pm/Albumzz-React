import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>
            Albummzzz
        </Link>
        <div className='right menu'>
            <Link to='/' className='item'>
                All Albums
            </Link>
        </div>
    </div> );
}
 
export default Header;