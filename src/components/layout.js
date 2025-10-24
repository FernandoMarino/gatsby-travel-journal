import * as React from 'react'
import { container, navLinks, navLinkItem, navLinkText, heading, main } from "./layout.module.css"
import { Link } from 'gatsby'



const Layout = ({pageTitle, children}) => {
    return (
        <>
            <nav className={container}>
            <h1 className={heading}>{pageTitle}</h1>
                <ul className={navLinks}>
                    <li className={navLinkItem}> <Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}> <Link className={navLinkText} to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <main className={main}>
                <p>Esse projeto está sendo desenvolvido para o curso de Pós-Graduação da INFNET.</p>
                <p>My Trips é o lugar perfeito para registrar todos os momentos de sua viagem. Crie álbuns, escreva histórias (logs) e registre fotos.</p>
                {children}
            </main>
        </>
    )
}

export default Layout