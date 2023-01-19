import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons_reddit.svg';

export const Header = () => {
    return (
        <Link to="/"><h1><img class="logo" src={logo} alt=""/>Mini<span className="blue">Reddit</span></h1></Link>
    );
}



