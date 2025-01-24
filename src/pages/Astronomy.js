import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "Astronomy: A Beginner's Guide to the Universe by Eric Chaisson and Steve McMillan",
    description: "A beginner-friendly book covering the basics of astronomy, including stars, planets, and galaxies.",
    image: require("../assets/astronomy.png"),
    link: "https://drive.google.com/file/d/1siDvurzU7QdxAzqSwj3OsyvvaDfGBBO7/view?usp=drive_link",
  },
  {
    title: "Hubble's Universe: Greatest Discoveries and Latest Images",
    description: "Stunning, cosmic, discoveries, images, galaxies, universe, exploration, Hubble, insights, breathtaking.",
    image: require("../assets/Hubble Telescope.png"),
    link: "https://drive.google.com/file/d/1XYMz6GQ-7-CY6svokJSudy7YY6Jcyq1G/view?usp=drive_link",
  },
  {
    title: "Cosmos by Carl Sagan",
    description: "A classic exploration of the universe, blending science with philosophy and history.",
    image: require("../assets/Cosmos.png"),
    link: "https://drive.google.com/file/d/1v-FgapU_lZ2F8NgfLUePW6yY039l53qS/view?usp=drive_link",
  },
  {
    title: "Turn Left at Orion by Guy Consolmagno and Dan M. Davis",
    description: "A user-friendly guide to locating celestial objects with a telescope.",
    image: require("../assets/turn left at orion.png"),
    link: "https://drive.google.com/file/d/1XBQkHCadKU4c1P2wHlf9rlpXmur6eD77/view?usp=drive_link",
  },
  {
    title: "A Brief History of Time by Stephen Hawking",
    description: " A groundbreaking book that delves into the nature of time, black holes, and the universe's origins.",
    image: require("../assets/Brief history of time.png"),
    link: "https://drive.google.com/file/d/1ejllupIshycx4n3o_6Vhr2kw8X7K8Ig5/view?usp=drive_link",
  },
  {
    title: "The Elegant Universe by Brian Greene",
    description: "Explores the theory of relativity, quantum mechanics, and string theory in the context of the universe's structure.",
    image: require("../assets/The elegent univers.png"),
    link: "https://drive.google.com/file/d/1T_Y67hh26ywKIP4eVu3Qy6kjegqyaYAE/view?usp=drive_link",
  },
  {
    title: "Black Holes and Time Warps: Einstein's Outrageous Legacy by Kip S. Thorne",
    description: "An engaging dive into black holes, wormholes, and space-time.",
    image: require("../assets/Black holes and time warps.png"),
    link: "https://drive.google.com/file/d/1YysEVGx_uCmaxWnN03Y7WVHCpaoz-kMg/view?usp=drive_link",
  },
  {
    title: "The Universe in a Nutshell",
    description: "The Universe in a Nutshell explores space, time, relativity, and cosmology..",
    image: require("../assets/Universe is a nutshell.png"),
    link: "https://drive.google.com/file/d/1CS3TmHHjRlb_GLu_ONAIufpo5UgAqUBH/view?usp=drive_link",
  },
];

const CHY = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Astronomy</h1>
      <p className="text-center">Explore a wide range of books of  Astronomy!</p>
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

export default CHY;