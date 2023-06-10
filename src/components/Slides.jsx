import { useState } from 'react'

import { Container, Button, Navbar, Row, Col, Card } from 'react-bootstrap';

const Slides = ({slides}) => {

    const [posicion, setPosicion] = useState(0);

    const reiniciar = () => {
        setPosicion(0);
    }

    const siguiente = () => {
        setPosicion(posicion+1);
    }

    const atras = () => {
        setPosicion(posicion-1);
    }

  return (
    <Container fluid >
        <Row fluid>
          <Col lg={12} className="d-flex justify-content-evenly">
            <Button variant="primary" className="fs-3" onClick={reiniciar} disabled={posicion === 0 && true}>Reiniciar</Button>
            <Button variant="warning" className="fs-3"  onClick={atras} disabled={posicion === 0 && true}>Atrás</Button>
            <Button variant="success" className="fs-3"  onClick={siguiente} disabled={(posicion+1) === slides.length && true}>Siguiente</Button>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Title><h2>{slides[posicion].title}</h2></Card.Title>
              <Card.Body><h4>{slides[posicion].description}</h4></Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
  )
}

export default Slides