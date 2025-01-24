import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "Dragon Ball",
    description: "The story follows Son Goku from childhood to adulthood as he trains in martial arts, searches for the seven Dragon Balls, and protects Earth from powerful foes.A classic in shonen manga, known for its humor, epic battles, and timeless characters.",
    image: require("../assets/Dragon ball.png"),
    link: "https://drive.google.com/file/d/1ICyeVeAsjeX9_zwR_-ySwaHfVrj2HUUL/view?usp=drive_link",
  },
  {
    title: "Tokyo Revengers",
    description: "Takemichi Hanagaki, a downtrodden man, discovers he can time travel and attempts to save his ex-girlfriend and change his life by influencing the violent Tokyo Manji Gang. A gripping story of second chances with intense gang conflicts and emotional depth.",
    image: require("../assets/tokyo revengers.png"),
    link: "https://drive.google.com/file/d/1zdHfJtkTLUiYlBHUCLS5tLeioNxsFFeI/view?usp=drive_link",
  },
  {
    title: "Tokyo Ghoul",
    description: "Kaneki Ken becomes a half-ghoul after a chance encounter and struggles to balance his human life with the violent, hidden world of ghouls.  A dark, thought-provoking tale with intricate character development and psychological depth.",
    image: require("../assets/tokyo goulu.png"),
    link: "https://drive.google.com/file/d/1cDavEeP_3MnNj-zgEE0WEM62jCGjNUiS/view?usp=drive_link",
  },
  {
    title: "One Punch Man",
    description: "Saitama, a hero who defeats any foe with a single punch, struggles with boredom and seeks a challenge in a world filled with powerful heroes and monsters.  A hilarious yet insightful parody of superhero tropes with stunning artwork.",
    image: require("../assets/OPM.png"),
    link: "https://drive.google.com/file/d/1xA_cXmcNhQNKElKo2FGyjJG0EQIa_mEa/view?usp=drive_link",
  },
  {
    title: "Hell’s Paradise",
    description: "Gabimaru, a ninja sentenced to death, is offered a chance at freedom by finding the Elixir of Life on a mysterious, dangerous island.  Combines dark fantasy with intense action and philosophical undertones.",
    image: require("../assets/Hells paradise.png"),
    link: "https://drive.google.com/file/d/1F24ICJJiW4ohUKSBFco_ejdck-_OmLsp/view?usp=drive_link",
  },
  {
    title: "Bungo Stray Dogs",
    description: "Centers on a detective agency of supernaturally gifted individuals who solve mysteries and combat other organizations. Unique powers inspired by literary figures and a blend of action, humor, and drama.",
    image: require("../assets/bungo stray dogs.png"),
    link: "https://drive.google.com/file/d/1mc5zAAbUxtV4FmMx-IXxAFrIOjqe9yla/view?usp=drive_link",
  },
  {
    title: "One Piece",
    description: "Monkey D. Luffy and his pirate crew search for the ultimate treasure, the One Piece, while exploring a fantastical world. A legendary adventure filled with humor, heart, and one of the richest worlds in manga.",
    image: require("../assets/one piec.png"),
    link: "https://drive.google.com/file/d/1PCm9UagG48J-cBY94kaihj51YsaZcav1/view?usp=drive_link",
  },
  {
    title: "Black Clover",
    description: "Asta, a boy without magic in a magical world, aims to become the Wizard King with determination and hard work. High-energy battles, camaraderie, and a protagonist who inspires through grit.",
    image: require("../assets/black clover.png"),
    link: "https://drive.google.com/file/d/19w67W_6TQudSAPCyScnVYcQsuA4TpjOC/view?usp=drive_link",
  },
  {
    title: "Bleach",
    description: "Ichigo Kurosaki becomes a Soul Reaper to protect the living and the dead from supernatural threats while uncovering his own powers. Iconic characters, epic battles, and a deep exploration of life and death.",
    image: require("../assets/Bleach.png"),
    link: "https://drive.google.com/file/d/12fHDEKyxaIzbcOk4E5_RPyVjxkIoeTHq/view?usp=drive_link",
  },
  {
    title: "Naruto",
    description: "Naruto Uzumaki, a ninja ostracized for hosting a dangerous spirit, dreams of becoming Hokage to earn the village’s respect. A legendary tale of growth, teamwork, and achieving dreams despite adversity.",
    image: require("../assets/Naruto.png"),
    link: "https://drive.google.com/file/d/1O8phLAHw8-rWuH2hmUdB1Ps4Lb6vGHcZ/view?usp=drive_link",
  },
  {
    title: "Attack on Titan (Shingeki no Kyojin)",
    description: "Humanity lives within giant walls to protect itself from man-eating Titans. Eren Yeager joins the fight against these creatures, uncovering shocking truths about their existence. A gripping mix of intense action, mystery, and thought-provoking social commentary.",
    image: require("../assets/AOT.png"),
    link: "https://drive.google.com/file/d/1waJ0m2PbH4yM5DPeqeYWpm6kfjpOEojx/view?usp=drive_link",
  },
  {
    title: "Demon Slayer (Kimetsu no Yaiba)",
    description: "Tanjiro Kamado embarks on a journey to avenge his family and cure his sister, who has become a demon, while battling powerful foes as a Demon Slayer. Stunning artwork, emotional storytelling, and epic battles with a heartfelt message.",
    image: require("../assets/DEmonslayer.png"),
    link: "https://drive.google.com/file/d/15Hzid35cS3Wc0g8ke-7dvt6VlN2-lLnE/view?usp=drive_link",
  },
];

const Manga = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Manga</h1>
      <p className="text-center">Explore a wide range of Manga!</p>
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

export default Manga;