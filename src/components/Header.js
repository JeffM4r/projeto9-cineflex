import styled from 'styled-components'

function Header() {
    return (
        <Head>
            <h1>
                CINEFLEX
            </h1>
        </Head>
    )
}

const Head = styled.header`
    width: 100vw;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    h1{
        text-align: center;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }

    
`

export default Header;