import React from "react"
import { Col, Navbar } from "react-bootstrap"
import Adslot from "./Adslot"

const Footer = () => (
  <Navbar bg="dark">
    <Col>
      {/* Add links here */}
    </Col>
    <Col md="4">
      <Adslot />
    </Col>
  </Navbar>
)

export default Footer
