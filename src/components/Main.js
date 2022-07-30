import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Movie({ posterURL, title, moviesId }) {

    return (

        <Link to={`/filme/${moviesId}`}>
            <Poster>
                <img src={posterURL} alt={title} />
            </Poster>
        </Link>

    )
}

function Main() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        requisicao.then(resposta => {
            setMovies(resposta.data);
        });
    }, []);


    return (
        <>
            <Principal>
                <h2>
                    Selecione o filme
                </h2>
                <Movies>

                    {movies.map(movie =>
                        <Movie key={movie.id} posterURL={movie.posterURL} title={movie.title} moviesId={movie.id} />
                    )}

                </Movies>
            </Principal>
        </>
    )
}

const Principal = styled.main`

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
`
const Movies = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
`
const Poster = styled.div`

width: 145px;
height: 209px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 11px;

    img{
        width: 129px;
        height: 193px;
        object-fit: cover;
    }
`

export default Main;