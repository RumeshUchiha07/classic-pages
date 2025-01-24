import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "Playing with numbers ",
    description: "Students create and publish their own classbook stories.",
    image: require("../assets/Playing with numbers.png"),
    link: "https://drive.google.com/file/d/1Tx9ijnZOLhhb4kfD3XXoVVoP95cmGNu9/view?usp=drive_link",
  },
  {
    title: "Understanding elementry shapes",
    description: "Discussion topics to foster critical thinking and communication.",
    image: require("../assets/Understanding elementry shapes.png"),
    link: "https://drive.google.com/file/d/1s0mc_TYh1KlGJQs1wdgy9JTQkmG-NzWP/view?usp=drive_link",
  },
  {
    title: "Diary of a Wimpy kid by Jeff Kinney",
    description: "This hilarious series captures the life of middle-schooler Greg Heffley through his witty journal entries, offering a fun take on growing up.",
    image: require("../assets/dairy of a wimp kid.png"),
    link: "https://drive.google.com/file/d/1DcMgUbDzZmvCnGMVqxneyP1JM8LgnnjC/view?usp=drive_link",
  },
  {
    title: "The Secret Garden by Frances Hodgson Burnett",
    description: "his timeless story follows Mary Lennox as she discovers a hidden, magical garden that transforms her life and those around her.",
    image: require("../assets/the secret garden .png"),
    link: "https://drive.google.com/file/d/1ZWUHYbEIdpY0gH_lSOmpCp46EOaeB-m6/view?usp=drive_link",
  },
  {
    title: "Charlotte's Web by E.B.White",
    description: "A touching story about friendship and selflessness as a pig named Wilbur is saved by the clever words of his spider friend, Charlotte.",
    image: require("../assets/Charlotte web .png"),
    link: "https://drive.google.com/file/d/1YOSBPdxmA7eMmEtj8JUrd9wqFWYKa4mU/view?usp=drive_link",
  },
  {
    title: "Whole Numbers",
    description: "The official textbooks for school curriculums in India, offering clear concepts and a wide range of problems to practice.",
    image: require("../assets/Whole Numers.png"),
    link: "https://drive.google.com/file/d/1YxfSsDFsW6l-W6zC5eMsJ14TCIsJvJEY/view?usp=drive_link",
  },
  {
    title: "Algebra",
    description: "A comprehensive guide filled with solved examples and exercises, ideal for exam preparation.",
    image: require("../assets/ALGEBRA.png"),
    link: "https://drive.google.com/file/d/1sBZeFgScKMql73fN4uNYDL6jvsx6Zczq/view?usp=drive_link",
  },
  {
    title: "Integers",
    description: "Covers essential scientific concepts in physics, chemistry, and biology, following the school curriculum.",
    image: require("../assets/Integers.png"),
    link: "https://drive.google.com/file/d/1xKRCIysVVEmfPCA3kXDhAcqfgVpfDbzP/view?usp=drive_link",
  },
];

const StudentPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Student Book Library</h1>
      <p className="text-center">Explore books to enhance your learning!</p>
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

export default StudentPage;
