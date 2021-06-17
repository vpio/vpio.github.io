import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div class='app'>
      <Navbar variant="funny" expand="sm">
        <Navbar.Brand>
          Pio Molina
        </Navbar.Brand>
      </Navbar>
      <div className="main">
        <Container>
          <h1>Website Under Construction - Come back Soon!</h1>
        </Container>
      </div>
    </div>
  );
}

export default App;
