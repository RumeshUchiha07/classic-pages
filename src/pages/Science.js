import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "A Short History of Nearly Everything by Bill Bryson",
    description: "A captivating exploration of science’s greatest discoveries and the people behind them.",
    image: require("../assets/Short histrtoy of nearly everything.png"),
    link: "https://drive.google.com/file/d/18d78h3ZP1O2TnrVwZ28YfE9hUBhrcGtV/view?usp=drive_link",
  },
  {
    title: "The Immortal Life of Henrietta Lacks by Rebecca Skloot",
    description: "Combines science and biography, telling the story of HeLa cells and their contribution to medicine.",
    image: require("../assets/immortal life.png"),
    link: "https://drive.google.com/file/d/1Plrhduv404BIqvoGDdI1gImZnNqwrpNa/view?usp=drive_link",
  },
  {
    title: "Silent Spring by Rachel Carson",
    description: "A groundbreaking book highlighting the environmental effects of pesticides.",
    image: require("../assets/Silent Spring.png"),
    link: "https://drive.google.com/file/d/1pi59_HlV63ugaKr03GshaUhy5GJU6mB9/view?usp=drive_link",
  },
  {
    title: "Biochemistry by Jeremy M. Berg, John L. Tymoczko, and Lubert Stryer",
    description: "A detailed resource on the chemical processes within living organisms.",
    image: require("../assets/BioChemistry.png"),
    link: "https://drive.google.com/file/d/1IfLT_2YaJIUVVewT-iBB9NubPoUnN2s1/view?usp=drive_link",
  },
  {
    title: "Concepts of Physics by H.C. Verma",
    description: "A widely acclaimed book for understanding fundamental physics concepts, essential for competitive exams.",
    image: require("../assets/Concepts of physics.png"),
    link: "https://drive.google.com/file/d/1YwO5xu4x2gDJ_fzrd58SaHS2n5ZxLSZv/view?usp=drive_link",
  },
  {
    title: "Fundamentals of Physics by Halliday, Resnick, and Walker",
    description: " A comprehensive book covering mechanics, thermodynamics, optics, and modern physics.",
    image: require("../assets/Fundemental Physics.png"),
    link: "https://drive.google.com/file/d/1NKYlP4euiM4iX8IDhaoJHLJKDfkaQagS/view?usp=drive_link",
  },
  {
    title: "The Feynman Lectures on Physics by Richard P. Feynman",
    description: "A classic series that explains physics concepts in an engaging and thought-provoking manner.",
    image: require("../assets/Feynman lectures on physics.png"),
    link: "https://drive.google.com/file/d/1w6K8NaUODM85CGwLx60VXCZgUdKG8Rs2/view?usp=drive_link",
  },
  {
    title: "Solar and Space Physics: A Science for a Technological Society",
    description: "Explores solar phenomena, space weather, and impacts on technological systems.",
    image: require("../assets/Solar and Sapce.png"),
    link: "https://drive.google.com/file/d/1Ov-Ih0TlHQiTdpnBXUTm9kRr7hqdvcU5/view?usp=drive_link",
  },
];

const PHY = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Science</h1>
      <p className="text-center">Explore a wide range of books of  Physicist!</p>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card className="category-card">
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Link to={book.link}>
                  <Button variant="primary">Downlod</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PHY;