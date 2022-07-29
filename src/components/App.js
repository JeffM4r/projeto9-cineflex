import React from "react";
import Header from "./Header"
import Main from "./Main";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";

function App() {
    return (

        <BrowserRouter>
        
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App;