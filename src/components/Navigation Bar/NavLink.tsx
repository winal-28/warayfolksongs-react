import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

interface Props {
    text: string;
    to: string;
}

export const NavLink: React.FC<Props> = ({ to, text }) => {
    return (
        <li>
            <Link to={to} className='nav-link'>{text}</Link>
        </li>
    )
}
