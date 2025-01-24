import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "GATE Engineering maths and general apps",
    description: "A comprehensive book covering quantitative aptitude, verbal reasoning, and logical reasoning, essential for all GATE papers.",
    image: require("../assets/GATE EM&apps.jpg"),
    link: "/book-details/1",
  },
  {
    title: "GATE ECE",
    description: "Contains solved question papers with detailed solutions for various branches, helping aspirants understand the pattern.",
    image: require("../assets/GATE ECE.jpg"),
    link: "/book-details/2",
  },
  {
    title: "GATE CS and IT",
    description: "A must-read for understanding network theory concepts and problem-solving techniques.",
    image: require("../assets/GATE CS & IT.jpg"),
    link: "/book-details/3",
  },
  {
    title: "GATE Mec and engineering",
    description: "A widely used book for understanding set theory, graph theory, and combinatorics.",
    image: require("../assets/GATE MEC .jpg"),
    link: "/book-details/4",
  },
  {
    title: "GATE General apps",
    description: "A classic guide for networking concepts, including protocols and communication.",
    image: require("../assets/GATE General apps.jpg"),
    link: "/book-details/1",
  },
  {
    title: "GATE Solved Papers",
    description: "A standard book for understanding VLSI circuit design principles.",
    image: require("../assets/GATE Solved apps.jpg"),
    link: "/book-details/2",
  },
  {
    title: "A handbook on CS and IT",
    description: "Covers principles of compiler construction and lexical analysis in depth.",
    image: require("../assets/GATE handbook CS & IT .jpg"),
    link: "/book-details/3",
  },
  {
    title: "GATE 2025 A handbook on CS and IT",
    description: "Covers principles of compiler construction and lexical analysis in depth.",
    image: require("../assets/GATE 2025 a handbook on cs&IT .jpg"),
    link: "/book-details/3",
  },
];
const GGATE = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Gate Exams</h1>
      <p className="text-center">Explore a wide range of  books for Gate exam particepents!</p>
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

export default GGATE;
