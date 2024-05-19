'use client'

import NavItem from "./nav-item";

const Navigation = () => {
    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <NavItem href='#about' name="ABOUT"></NavItem>
            <NavItem href='#publications' name="PUBLICATIONS"></NavItem>
            <NavItem href='#credits' name="CREDITS"></NavItem>
        </div>
    )
}

export default Navigation