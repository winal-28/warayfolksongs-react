import React from 'react';
import { NavLink } from './NavLink';

export const NavBar: React.FC = () => {
    return (
        <nav>
            <h4 className="logo">WarayFolkSongs</h4>
            <ul className='nav-links'>
                <NavLink to='/' text='Home' />
                <NavLink to='/about' text='About' />
                <NavLink to='/contact' text='Contact' />
    
            </ul>
        </nav>
    )
}
