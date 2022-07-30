import styled from "styled-components";

function Footer({title, posterURL, hourday}) {
    return (
        <Bottom>
            <SmallPoster>
                <img src={posterURL} alt={title}/>
            </SmallPoster>
            <SelectedSection>
                <p>
                    {title}
                </p>
                <p>
                    {hourday}
                </p>
            </SelectedSection>
        </Bottom>
    )
}

const Bottom = styled.footer`

display: flex;
align-items: center;
position: fixed;
left: 0;
bottom: 0;
width: 100vw;
height: 117px;
background: #DFE6ED;
border-top: 1px solid #9EADBA;
`
const SmallPoster = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
height: 89px;
width: 64px;
background-color: #FFFFFF;

    img{
    height: 72px;
    width: 48px;
    object-fit: cover;
}
`
const SelectedSection = styled.div`

display: flex;
flex-direction: column;
margin-left: 14px;

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
}
`

export default Footer;