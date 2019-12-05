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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Music Production | Mixing & Mastering | Violin
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
        <Container>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711448027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </Container>
        <Container>
          <h1>Latest</h1>
          <p>
            <Button variant="dark">Full Discography</Button>
          </p>

        </Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="link-3" style={{color: 'grey'}}>
            <FontAwesomeIcon icon={faSoundcloud} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{color: 'grey'}}><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="link-0" style={{color: 'grey'}}><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{color: 'grey'}}><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default App;
