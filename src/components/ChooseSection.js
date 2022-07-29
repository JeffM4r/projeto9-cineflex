import styled from 'styled-components';

function ChooseSection() {
    return (
        <>
            <SelectSection>
                <h2>
                    Selecione o horário
                </h2>
            </SelectSection>
            <footer>

            </footer>
        </>
    )
}

const SelectSection = styled.main`

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

export default ChooseSection;