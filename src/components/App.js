import React from "react";
import Header from "./Header"
import Main from "./Main";
import GlobalStyle from "./GlobalStyles";
import "../assets/css/reset.css";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Main/>
        </>
    )
}

export default App;