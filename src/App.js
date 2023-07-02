import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap';


const courses = [
  {
    id: 1,
    title: "Beginner's Yoga",
    description: "Perfect for those new to yoga, this course covers the basics and helps you build a strong foundation.",
    image: "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/01/yoga-for-beginners-2.jpeg"
  },
  {
    id: 2,
    title: "Intermediate Yoga",
    description: "Take your yoga practice to the next level with our intermediate course, focusing on strength and flexibility.",
    image: "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/01/beginner-yoga.jpeg"
  },
  {
    id: 3,
    title: "Advanced Yoga",
    description: "Challenge yourself with our advanced course, designed for experienced yogis seeking a deeper practice.",
    image: "https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/07/yoga-Safety-Tips.jpeg?resize=360%2C540&ssl=1"
  }
];

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App bg-light-blue ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar className={darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-yellow'} expand="lg">
        <Container>
          <Navbar.Brand href="#" className={darkMode ? 'text-light' : 'text-dark'}>YogaCourse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link href="#" className={darkMode ? 'text-light' : 'text-dark'}>Home</Nav.Link>
              <Nav.Link href="#" className={darkMode ? 'text-light' : 'text-dark'}>Courses</Nav.Link>
              <Nav.Link href="#" className={darkMode ? 'text-light' : 'text-dark'}>About</Nav.Link>
              <Nav.Link href="#" className={darkMode ? 'text-light' : 'text-dark'}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <section className="hero-section bg-purple text-center">
        <Container>
          <h1 className="display-4">Discover the Art of Yoga</h1>
          <p className="lead">Embark on a journey of self-discovery and inner peace through our comprehensive yoga video courses.</p>
          <Button variant="primary" size="lg">Start Learning</Button>
        </Container>
      </section>

      <section className="courses-section">
        <Container>
          <h2 className="text-center">Featured Courses</h2>
          <Row>
            {courses.map(course => (
              <Col key={course.id} md={4}>
                <Card>
                  <Card.Img className='category-image' variant="top" src={course.image} alt={course.title} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className={`footer ${darkMode ? 'dark' : 'bg-dark'}`}>
        <Container className="text-center text-white">
          <p>&copy; 2023 YogaCourse. All rights reserved.</p>
        </Container>
      </footer>
      <div className="dark-mode-toggle">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
