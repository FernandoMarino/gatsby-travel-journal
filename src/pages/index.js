import * as React from "react";
import Layout from "../components/layout";


export const Head = () => <title>My Trips</title>

export default function Index() {
	return (
        
        <>
            <Layout pageTitle="Welcome to My Trips - Your Travel LogBook"/>
            <p style={"backgroundColor: white"}>Esse projeto está sendo desenvolvido para o curso de Pós-Graduação da INFNET.</p>
        </>
        
        
        
    )
}