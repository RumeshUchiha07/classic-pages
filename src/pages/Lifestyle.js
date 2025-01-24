import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "The Power of Now by Eckhart Tolle",
    description: "A spiritual guide that focuses on living in the present moment and understanding the mind-body connection. It helps to break free from anxieties about the past or future.",
    image: require("../assets/The Power of now .png"),
    link: "https://drive.google.com/file/d/1VHQCT3a7aZSlNTpmOjUJBy2_b62BFyVd/view?usp=drive_link",
  },
  {
    title: "Atomic Habits by James Clear",
    description: "A practical guide to building good habits and breaking bad ones with actionable strategies. Great for making lasting, positive changes in daily routines.",
    image: require("../assets/Aatomic Habits.png"),
    link: "https://drive.google.com/file/d/17ldnuzpcw2YWaouvpbfxtE1o42fTvysz/view?usp=drive_link",
  },
  {
    title: "Man’s Search for Meaning by Viktor E. Frankl",
    description: "A psychologist's memoir about finding meaning in life, even in the face of extreme suffering. Offers profound insights into human strength and the pursuit of meaning.",
    image: require("../assets/Man-Search for meaning.png"),
    link: "https://drive.google.com/file/d/1lxkJM6URR1XpaQZHlfF9v7kE-y70ndI3/view?usp=drive_link",
  },
  {
    title: "The Four Agreements by Don Miguel Ruiz",
    description: "A simple yet profound guide to personal freedom based on Toltec wisdom. Encourages actionable life agreements for clarity and happiness.",
    image: require("../assets/THE FOUR AGREEMENTS.png"),
    link: "https://drive.google.com/file/d/16SNK_JV_ospiWYhwRGmKBtf-0WqPBjrI/view?usp=drive_link",
  },
  {
    title: "Think Like a Monk by Jay Shetty",
    description: "Drawing from ancient wisdom, Jay Shetty provides a roadmap for overcoming negativity and finding purpose. Simplifies complex spiritual practices for modern life.",
    image: require("../assets/Like Monk.png"),
    link: "https://drive.google.com/file/d/1a_XbYOxZ-inkwsCVGSOFogc7DlOToHnm/view?usp=drive_link",
  },
  {
    title: "The Subtle Art of Not Giving a Fuck by Mark Manson",
    description: "Challenges traditional positivity approaches and emphasizes embracing struggles to live a meaningful life. A fresh, raw take on self-help that’s both humorous and profound.",
    image: require("../assets/art of not giving a fuck.png"),
    link: "https://drive.google.com/file/d/1BZYXyizN9CgV4jfnLnpxpe8-mdV2xRmf/view?usp=drive_link",
  },
  {
    title: " The Alchemist by Paulo Coelho",
    description: "A novel about a shepherd's journey of self-discovery and the pursuit of his Personal Legend.  Inspires readers to follow their dreams and listen to their hearts.",
    image: require("../assets/The Alchemist.png"),
    link: "https://drive.google.com/file/d/124rWu8zb5ye1LKt41tqap9o4J5Gz_cEM/view?usp=drive_link",
  },
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life by Héctor García and Francesc Miralles",
    description: " A guide to discovering your purpose (ikigai), inspired by Okinawan centenarians and their joyful, meaningful lives. Learn how to balance passion, work, and life for lasting happiness and fulfillment.",
    image: require("../assets/inigai.png"),
    link: "https://drive.google.com/file/d/1i9DKPE6hrQEx4U1_maQ_SitMCKBB0QMN/view?usp=drive_link",
  },
];
const LStyle = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Lifestyle</h1>
      <p className="text-center">Explore a wide range of books for Lifestyle!</p>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card className="category-card">
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Link to={book.link}>
                  <Button variant="primary">downlod</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LStyle;