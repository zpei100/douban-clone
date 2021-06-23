import React from 'react';
import { FlexCenter } from '../util'
import styled from 'styled-components'

const Div = styled.div`
    height: 1000px;
`

export function Footer() {
    return (
        <FlexCenter>
            <Div>FOOTER</Div>
        </FlexCenter>
    );
}