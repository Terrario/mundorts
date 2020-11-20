import React from "react"
import {
  Nav,
  Navbar,
} from "react-bootstrap"

const Header = () => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/" className="text-light">Mundo RTS</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/" className="text-light">Início</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/posts" className="text-light">Artigos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-light">0 a.d.</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-light">Jogos de RTS Gratuitos</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
