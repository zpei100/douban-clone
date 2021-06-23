import React from 'react';
import { FlexCenter } from '../util'
import styled from 'styled-components'

const BG = styled.div<{backgroundImageUrl: string, minHeight: string}>`
    background: url(${props => props.backgroundImageUrl}) no-repeat center fixed;
    background-size: cover;
    width: 100vw;
    height: auto;
    min-height: ${props => props.minHeight};
    padding-bottom: 35%;
`

export function Hero() {
    return (
        <FlexCenter>
            <BG backgroundImageUrl="assets/tree.png" minHeight="60vh">
                HELLO WORLD
            </BG>
        </FlexCenter>
    );
}
