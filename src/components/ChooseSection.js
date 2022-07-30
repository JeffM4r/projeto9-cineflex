import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';

function Section({ weekday, showtimes, date}) {

    return (
        <div>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map(showtime => <Link key={showtime.id} to={`/sessao/${showtime.id}`}><Time>{showtime.name}</Time></Link>)}
            </div>
        </div>
    )
}

function ChooseSection() {

    const params = useParams();
    const [sections, setSections] = useState([]);
    const [posterURL, setPosterURL] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idfilme}/showtimes`
        );

        requisicao.then(resposta => {
            setSections(resposta.data.days);
            setPosterURL(resposta.data.posterURL);
            setTitle(resposta.data.title);
        });
    }, []);


    return (
        <>
            <SelectSection>
                <h2>
                    Selecione o horário
                </h2>
                <div>

                    {sections.map(section =>
                        <Section key={section.id} date={section.date} weekday={section.weekday} sectionId={section.id} showtimes={section.showtimes} />
                    )}

                </div>
            </SelectSection>
            <Footer posterURL={posterURL} title={title}/>
        </>
    )
}

const SelectSection = styled.main`

font-family: 'Roboto', sans-serif;
margin-bottom: 117px;

    h2{
        color:#293845;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    div> div > div {
        margin-left: 24px;
    }
    div > div > p{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 22px;
        margin-left: 24px;
    }

`
const Time = styled.button`

font-family: 'Roboto', sans-serif;
border:none;
width: 83px;
height: 43px;
background: #E8833A;
border-radius: 3px;
color: #FFFFFF;
font-size: 18px;
font-weight: 400;
margin-right: 8px;
margin-bottom: 23px;
`

export default ChooseSection;