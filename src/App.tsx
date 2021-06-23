import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero'
import { Footer } from './components/footer/footer'
import { FlexCenter, ContentWrapper } from './components/util'

const theme = {
    primary: "red",
    bg: "black"
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Hero/>
            <FlexCenter>
                <ContentWrapper contentWidth={"50%"}>
                    content goes here
                </ContentWrapper>
            </FlexCenter>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;