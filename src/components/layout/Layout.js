import React from "react"
import {
  Col,
  Container,
  Row,
} from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import Adslot from "./Adslot"
import BEMHelper from "react-bem-helper"
import "../../scss/layout.scss"

const bem = new BEMHelper('main')

const Layout = ({ children }) => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Container>
          <Row {...bem()}>
            <Col>{children}</Col>
            <Col md="4">
              <Adslot />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
    <Footer />
  </>
)

export default Layout
