import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import Footer from './Footer'

export default function Nav() {

    const [menuActive, setMenuActive] = useState(false)

    function handleMenu(){
        setMenuActive(!menuActive)
        console.log("changed")
        console.log(menuActive)
    }

    const activeStyles = {
        transform: "translateX(-1vw) translateY(10.5vh)",
        zIndex:"10",
        display:"grid",
        position:"absolute",
    
        
    }

    return (
        <div>
            <div className="row pb-1">

                <nav className="nav flex items-center" role="navigation">

                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav__link active_link home__link' : "nav__link"}><img className='h-14 ' src="/images/home.svg" alt="" /></NavLink>

                    <div className='flex justify-between'>
                        <img src="/images/wip-assets/menu.svg" alt="" className={!menuActive? "menu" : 'hideMenu'} onClick={handleMenu} />
                        
                        <ul className='nav__items' style={menuActive ? activeStyles : {}}>

                            <li className="nav__item"><NavLink id='navBar' to="/work" className={({ isActive }) => isActive ? 'nav__link active_link' : "nav__link"}>Work</NavLink></li>
                            <li className="nav__item"><NavLink id='navBar' to="/wip" className={({ isActive }) => isActive ? 'nav__link active_link' : "nav__link wip"}>WIP</NavLink></li>
                            <li className="nav__item">
                                <NavLink id='navBar' to="/about" className={({ isActive }) => isActive ? 'nav__link active_link' : "nav__link"}>About</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink id='navBar' to="/contact" className={({ isActive }) => isActive ? 'nav__link active_link' : "nav__link"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}
