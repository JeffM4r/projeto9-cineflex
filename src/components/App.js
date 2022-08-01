import { React, useState } from "react";
import Header from "./Header"
import Main from "./Main";
import ChooseSection from "./ChooseSection"
import ChooseChairs from "./ChooseChairs"
import Conclusion from "./Conclusion"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";

function App() {

    const [nameLastScreen, setNameLastScreen] = useState("")
    const [cpfLastScreen,setCpfLastScreen] = useState("")
    const [assentos, setAssentos] = useState([])
    const [movieName, setMovieName] = useState("")
    const [movieDate, setMovieDate] = useState("")

    return (

        <BrowserRouter>
        
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/filme/:idfilme" element={<ChooseSection setMovieName={setMovieName}/>}/>
                <Route path="/sessao/:idsessao" element={<ChooseChairs setNameLastScreen={setNameLastScreen} setCpfLastScreen={setCpfLastScreen} setAssentos={setAssentos} assentos={assentos} setMovieDate={setMovieDate}/>}/>
                <Route path="/sucesso" element={<Conclusion nameLastScreen={nameLastScreen} cpfLastScreen={cpfLastScreen} assentos={assentos} movieName={movieName} movieDate={movieDate} setAssentos={setAssentos}/>}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App;