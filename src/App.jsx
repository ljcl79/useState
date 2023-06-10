import {  Navbar, Container } from 'react-bootstrap';
import Slides from './components/Slides';
import slideData from './data/slides.json';

function App() {

  return (
    <div>
      <Navbar bg="light">
        <Container fluid >
          <Navbar.Brand href="#home"><h1>Slides - useState</h1></Navbar.Brand>
        </Container>
      </Navbar>
      <hr />
      <Slides slides={slideData}></Slides>

    </div>
  )
}

export default App
