import * as React from 'react'
import { container, navLinks, navLinkItem, navLinkText, heading } from "./layout.module.css"
import { Link } from 'gatsby'



const Layout = ({pageTitle, children}) => {
    return (
        <>
            <nav className={container}>
                <ul className={navLinks}>
                    <li className={navLinkItem}> <Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}> <Link className={navLinkText} to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </>
    )
}

export default Layout