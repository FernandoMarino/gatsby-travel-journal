// Step 1: Import React
import React from "react";
import Layout from "../styles/global.css"


// Step 2: Define your component
const Sobre = () => {
    return (
        <>
            <Layout pageTitle="Sobre o Site" />
            
        </>
    )
}

// Step 3: Export your component
export default Sobre

// Step 4: Add a page Title
export const Head = () => <title>Sobre MyTrips</title>