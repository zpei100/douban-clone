import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FlexCenter, ContentWrapper } from '../util'

const FullWidthNavBar = styled(Navbar)`
    width: 100%
`

export function Header() {
    return (
        <FlexCenter>
            <ContentWrapper contentWidth="100%">
                <FullWidthNavBar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">HOME PAGE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">THE FIRM</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">THE PRACTICE</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </FullWidthNavBar>`
            </ContentWrapper>
        </FlexCenter>
    );
}