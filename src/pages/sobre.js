// Step 1: Import React
import React from "react";
import Layout from "../components/layout"


// Step 2: Define your component
const Sobre = () => {
    return (
        <>
            <Layout pageTitle="Sobre o Site" />
            <p>My Trips é o lugar perfeito para registrar todos os momentos de sua viagem. Crie álbuns, escreva histórias (logs) e registre fotos.</p>
        </>
    )
}

// Step 3: Export your component
export default Sobre

// Step 4: Add a page Title
export const Head = () => <title>Sobre MyTrips</title>