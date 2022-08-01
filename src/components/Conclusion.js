import { Link } from "react-router-dom";
import styled from "styled-components";


function Conclusion({nameLastScreen, movieName, cpfLastScreen, assentos, setAssentos, movieDate}){

    function resetArray(){
        setAssentos([])
    }

    return(
        <Principal>
            <div>
                <h2>Pedido feito com sucesso!</h2>
            </div>
            
            <h3>Filme e sessão</h3>
            <p>{movieName}</p>
            <p>{movieDate}</p>
            <h3>Ingressos</h3>
            {assentos.map((assento,index) => <p key={index}>Assento {assento}</p>)}
            <h3>Comprador</h3>
            <p>Nome: {nameLastScreen}</p>
            <p>CPF: {cpfLastScreen}</p>
            
            <div>
                <Link onClick={resetArray} to='/'><HomeButton>Voltar pra Home</HomeButton></Link>
            </div>                      

        </Principal>
        
    )
}

const Principal = styled.main`
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;

    div{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    h3{
        font-weight: 700;
        font-size: 24px;
        margin-left: 29px;
        margin-top:30px;
        margin-bottom: 5px;
    }

    p{
        margin-left: 29px;
        margin-bottom: 3px;
        font-weight: 400;
        font-size: 22px;
    }

    h2{
        color:#247A6B;
        max-width: 190px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 40px;
    }
`

const HomeButton = styled.button`
font-family: 'Roboto', sans-serif;
margin-top: 62px;
width: 225px;
height: 42px;
border:none;
background: #E8833A;
color: #FFFFFF;
font-size: 18px;
border-radius: 3px;
&:hover{
    cursor: pointer;
}
`

export default Conclusion;