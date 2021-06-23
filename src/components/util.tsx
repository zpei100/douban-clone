import styled from 'styled-components'

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const ContentWrapper = styled(FlexCenter)<{contentWidth: string}>`
    width: ${props => props.contentWidth}
`;