import * as React from 'react'
import "../styles/global.css"
import Navbar from './Navbar'
import PageTitle from './PageTitle'


export default function Layout({children}) {
    return (
        <div className="layout">
            <PageTitle title_h1={"myTrips"} title_h2={"Your Travel Logbook"} />
            <Navbar />
            
            <main className="content">
                {children}
            </main>
            <footer>
                <p>&copy; 2025. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

