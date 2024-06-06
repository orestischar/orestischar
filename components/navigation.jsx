'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import NavItem from './nav-item';



const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    const handleClick = (id) => {
        setActiveSection(id);
    };

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <div onClick={() => handleClick("about")}><NavItem active={activeSection === 'about'} href='#' name='ABOUT'></NavItem></div>
            <div onClick={() => handleClick("publications")}><NavItem active={activeSection === 'publications'} href='#publications' name='PUBLICATIONS'></NavItem></div>
            <div onClick={() => handleClick("credits")}><NavItem active={activeSection === 'credits'} href='#credits' name='CREDITS'></NavItem></div>
            /* <Link href="/nim"><NavItem name='NIM'></NavItem></Link> */
        </div>
    )
}

export default Navigation