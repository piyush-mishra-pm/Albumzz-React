import React from 'react';
import { Link } from 'react-router-dom';

import GoogleOAuth from './GoogleOAuth';

const Header = () => {
    return ( <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>
            Albummzzz
        </Link>
        <div className='right menu'>
            <Link to='/' className='item'>
                All Albums
            </Link>
            <Link to='/' className='item'>
                <GoogleOAuth />
            </Link>
        </div>
    </div> );
}
 
export default Header;