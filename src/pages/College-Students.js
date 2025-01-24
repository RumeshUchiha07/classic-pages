import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "Engineering Mathematics by B.S. Grewal",
    description: "A comprehensive book that covers essential mathematical concepts for engineering students, including calculus, linear algebra, and differential equations.",
    image: require("../assets/eng maths.png"),
    link: "https://drive.google.com/file/d/1_deKOWZzB2d6sA6oE3Bu3wvQJgFr3A0d/view?usp=drive_link",
  },
  {
    title: "Strength of Materials by R.K. Bansal",
    description: "A key resource for mechanical and civil engineering students, explaining concepts with solved examples and diagrams.",
    image: require("../assets/strength of metrials.png"),
    link: "https://drive.google.com/file/d/1w0xmlpwuidFYgVzY4VhUyiIu3WxMCyxs/view?usp=drive_link",
  },
  {
    title: "Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein",
    description: "A must-read for computer science students, this book covers algorithm design and analysis in detail.",
    image: require("../assets/ALG.png"),
    link: "https://drive.google.com/file/d/1xap0YbvIY9QOeo5hGez1P6mnrp3gesLj/view?usp=drive_link",
  },
  {
    title: "Clean Code by Robert C. Martin",
    description: "A practical guide to writing readable, maintainable, and efficient code for programming enthusiasts.",
    image: require("../assets/clene code.png"),
    link: "https://drive.google.com/file/d/1iOTQk3tfW1pcdP8NOCqMBjHl4YcBSfBd/view?usp=drive_link",
  },
  {
    title: "The Craft of Research by Wayne C. Booth",
    description: "A step-by-step guide to conducting effective academic research, useful for students across disciplines.",
    image: require("../assets/craft of reserch.png"),
    link: "https://drive.google.com/file/d/1-rB3GdeLRcoSiKBu8Z2tdv-Yeo1mV_rL/view?usp=drive_link",
  },  {
    title: "Principles of Economics by N. Gregory Mankiw",
    description: "A foundational book that introduces microeconomics and macroeconomics concepts in an engaging and accessible style.",
    image: require("../assets/principles of economics.png"),
    link: "https://drive.google.com/file/d/1GdgfAIfFuN8WivPuLvIVzsgJxrpFP_4h/view?usp=drive_link",
  },  {
    title: "Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig",
    description: "A cornerstone book covering AI concepts, algorithms, and applications.",
    image: require("../assets/AI.png"),
    link: "https://drive.google.com/file/d/1Qlip1lfnUeVB2iIkAh1c1LOjm4InWwEJ/view?usp=drive_link",
  },  {
    title: "Operating System Concepts by Abraham Silberschatz, Peter B. Galvin, and Greg Gagne",
    description: "A definitive book on operating system design and implementation.",
    image: require("../assets/os.png"),
    link: "https://drive.google.com/file/d/1MocL9j4I7haJLIbQM6YqPi8eZKL1bQi9/view?usp=drive_link",
  }, 
];


const CLGStudentsPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">College Students Page</h1>
      <p className="text-center">Explore a wide range of academic books for College students!</p>
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

export default CLGStudentsPage;
