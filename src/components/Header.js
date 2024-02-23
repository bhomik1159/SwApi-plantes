import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import { IoPlanetSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div>
     <header>
        <Navbar bg='secondary' variant='secondary' expand='md' collapseOnSelect>
        <Container>
            <Navbar.Brand><IoPlanetSharp/>  Star War Planets</Navbar.Brand>
            </Container>

        </Navbar>
     </header>
    </div>
  )
}

export default Header
