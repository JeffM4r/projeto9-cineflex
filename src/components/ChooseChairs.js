import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';

function ChooseChairs() {

    return (
        <>
            <SelectChairs>

                <h2>
                    Selecione o(s) assento(s)
                </h2>
                <Chairs>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>01</div>
                    <div>48</div>
                    <div>47</div>
                    <div>48</div>
                    <div>49</div>
                    <div>50</div>
                </Chairs>
                <Subtitle>
                    <div>
                        <Selected></Selected>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <Unselected></Unselected>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <Unavailable></Unavailable>
                        <p>Indisponível</p>
                    </div>
                </Subtitle>
                <Form>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..."></input>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..."></input>
                    <div>
                        <button>Reservar assento(s)</button>
                    </div>
                </Form>

            </SelectChairs>
            <Footer />
        </>
    )
}

const SelectChairs = styled.main`

font-family: 'Roboto', sans-serif;
margin-bottom: 137px;
display: flex;
flex-direction: column;
align-items: center;

    h2{
        color:#293845;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }
`
const Chairs = styled.div`
display: flex;
flex-wrap: wrap;
width: 340px;

    div{
        width: 26px;
        height: 26px;
        margin-bottom: 18px;
        margin-left:3px;
        margin-right:3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 50px;
    }

`
const Subtitle = styled.div`
display: flex;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    div > p{
        margin-bottom: 33px;
        font-size: 13px;
        font-weight: 400;
    }
`
const Selected = styled.div`
width: 26px;
height: 26px;
margin-bottom: 6px;
margin-left:50px;
margin-right:50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #8DD7CF;
border: 1px solid #1AAE9E;
border-radius: 50px;
`
const Unselected = styled.div`
width: 26px;
height: 26px;
margin-bottom: 6px;
margin-left:50px;
margin-right:50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 50px;
`
const Unavailable = styled.div`
width: 26px;
height: 26px;
margin-bottom: 6px;
margin-left:50px;
margin-right:50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FBE192;
border: 1px solid #F7C52B;
border-radius: 50px;
`
const Form = styled.form`
width: 327px;
    p{
        font-size: 18px;
        margin-bottom: 1px;
        margin-top: 7px;
    }
    input{
        padding-left:10px;
        padding-right:10px;
        width: 100%;
        height: 51px;
        font-family: 'Roboto';  
        font-size: 18px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    input::placeholder{
        color: #AFAFAF;
        font-family: 'Roboto';        
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div > button{
        margin-top: 40px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border:none;
        font-size: 18px;
        color: #FFFFFF;
        border-radius: 3px;
    }
`

export default ChooseChairs