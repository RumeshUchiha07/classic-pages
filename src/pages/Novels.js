import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "The God of Small Things",
    description: "A haunting tale set in Kerala, exploring a family’s secrets, love, and societal norms. A Booker Prize-winning novel that blends poetic prose with raw emotions.",
    image: require("../assets/the god of small thgings.png"),
    link: "https://drive.google.com/file/d/1cWXNp2b0mT_5ipvprYmKKEAOPwRn9X4J/view?usp=drive_link",
  },
  {
    title: "Midnight’s Children",
    description: "Chronicles India’s transition from British rule through the magical and symbolic life of Saleem Sinai. A literary masterpiece that merges personal and national histories.",
    image: require("../assets/mightnight child.png"),
    link: "https://drive.google.com/file/d/1SLlbc3gMxAKigFsKbnKVpQT36i7HLLk6/view?usp=drive_link",
  },
  {
    title: "Train to Pakistan",
    description: "A powerful story of love and betrayal during India’s Partition in 1947. A gripping and poignant depiction of one of India's darkest periods.",
    image: require("../assets/train to pakistan.png"),
    link: "https://drive.google.com/file/d/1hOKkdp4WAkhrJ06r8SYHEQULS4PIwtW0/view?usp=drive_link",
  },
  {
    title: "The White Tiger",
    description: "A sharp critique of class struggle in India, told through the eyes of a wily entrepreneur, Balram Halwai. Winner of the Man Booker Prize, it’s a darkly humorous tale of survival.",
    image: require("../assets/white tiger.png"),
    link: "https://drive.google.com/file/d/1oyIAfmRAza8Hg3jRMbxRqBjT5f5tAcSf/view?usp=drive_link",
  },
  {
    title: "Palace of Illusions",
    description: "A retelling of the Mahabharata from Draupadi’s perspective, showcasing her strength and struggles. A fresh, feminist perspective on an ancient epic.",
    image: require("../assets/palace of illusions.png"),
    link: "https://drive.google.com/file/d/1tYfSSxcoCxOOD3it1sCzT8aBEKl_YdI0/view?usp=drive_link",
  },  {
    title: "Malgudi Days",
    description: "A collection of short stories set in the fictional South Indian town of Malgudi, portraying everyday lives. Timeless tales that capture the essence of rural India.",
    image: require("../assets/malgudi days.png"),
    link: "https://drive.google.com/file/d/1fcralimp1GSvy9B6xAfefPPFniDwEiIS/view?usp=drive_link",
  },  {
    title: "To Kill a Mockingbird ",
    description: " A young girl, Scout Finch, navigates childhood and learns about justice in a racially divided Southern town.  A classic that’s both a coming-of-age story and a critique of prejudice.",
    image: require("../assets/to kill a mocking bird.png"),
    link: "https://drive.google.com/file/d/1fWpN_DLglnZqn6kXoSBVuMm47wSsFGDo/view?usp=drive_link",
  },  {
    title: "1984",
    description: " A dystopian tale of a totalitarian regime that controls truth, freedom, and individuality. A chilling vision of the future that remains relevant.",
    image: require("../assets/1984.png"),
    link: "https://drive.google.com/file/d/1E2qlJE1yllOSWEy0ztCxiYuwKrwmlAnJ/view?usp=drive_link",
  },  {
    title: "Pride and Prejudice",
    description: "A romantic tale of Elizabeth Bennet and Mr. Darcy, exploring love and societal expectations. A timeless novel with wit and charm.",
    image: require("../assets/pride and prejudice.png"),
    link: "https://drive.google.com/file/d/1fO7n57rQrBWBKl13jKSSlfX_h-EQjeY6/view?usp=drive_link",
  },  {
    title: "The Great Gatsby",
    description: "Jay Gatsby’s tragic pursuit of the American Dream and his love for Daisy Buchanan. A critique of the Roaring Twenties with lush prose.",
    image: require("../assets/the greate gatsby .png"),
    link: "https://drive.google.com/file/d/1JIs-_XOi5Njey5mHr9I2O1G614MYjm96/view?usp=drive_link",
  },  {
    title: "The Catcher in the Rye",
    description: "A rebellious teenager, Holden Caulfield, navigates alienation and his place in the world. A landmark novel of teenage angst and discovery.",
    image: require("../assets/catcher in the rye.png"),
    link: "https://drive.google.com/file/d/1Y7uH6UcTYgMrxSlnvPVdimHlRTfMM1lG/view?usp=drive_link",
  },  {
    title: "The Alchemist",
    description: "Santiago, a shepherd, embarks on a quest to find a treasure, discovering the meaning of life along the way. A simple yet profound fable about following your heart.",
    image: require("../assets/The Alchemist.png"),
    link: "https://drive.google.com/file/d/124rWu8zb5ye1LKt41tqap9o4J5Gz_cEM/view?usp=drive_link",
  }
];
const Novel = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Novels</h1>
      <p className="text-center">Explore a wide range of Novels!</p>
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

export default Novel;