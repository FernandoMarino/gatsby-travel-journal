import { Link } from 'gatsby'
import * as React from 'react'


const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout