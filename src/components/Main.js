import styled from 'styled-components'
import pyke from '../assets/imgs/download.jpg'

function Main() {
    return (
        <Principal>
            <h2>
                Selecione o filme
            </h2>
            <Movies>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
                <Movie>
                    <img src={pyke} alt='Pyke'/>
                </Movie>
            </Movies>
        </Principal>
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
const Movie = styled.div`

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