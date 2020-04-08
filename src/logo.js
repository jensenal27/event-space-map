import React from 'react';
import {FiSun} from "react-icons/fi";
import {FiMoon} from "react-icons/fi";

const Logo = ({toggleTheme, theme, activeRoom}) => {
    return ( theme === 'light' ?
        <div className = 'logo' id = {activeRoom === '' ? '' : `logo${activeRoom}`} onClick = {toggleTheme}><FiSun/></div> :
        <div className = 'logo' id = {activeRoom === '' ? '' : `logo${activeRoom}`} onClick = {toggleTheme}><FiMoon/></div>
    );
}

export default Logo;