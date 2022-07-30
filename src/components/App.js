import React from "react";
import Header from "./Header"
import Main from "./Main";
import ChooseSection from "./ChooseSection"
import ChooseChairs from "./ChooseChairs"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";

function App() {
    return (

        <BrowserRouter>
        
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/filme/:idfilme" element={<ChooseSection/>}/>
                <Route path="/sessao/:idsessao" element={<ChooseChairs/>}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App;