import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Example data for student books
const books = [
  {
    title: "Spider-Man: Blue",
    description: "A reflective story where Peter Parker reminisces about his love for Gwen Stacy and his journey as Spider-Man. A heartfelt look at Spider-Man’s emotional depth with beautiful art.",
    image: require("../assets/Spider-man.png"),
    link: "https://drive.google.com/file/d/1xm3Myw4wjm8Q1mSaw-X-mtagIaIn3DVM/view?usp=drive_link",
  },
  {
    title: "X-Men: God Loves, Man Kills",
    description: "he X-Men face religious fanaticism as they battle for the survival of mutantkind against hatred and prejudice. A powerful commentary on discrimination wrapped in a compelling narrative.",
    image: require("../assets/x-mea.png"),
    link: "https://drive.google.com/file/d/1SfdNcr_Kb6tmrnOeypUqUeTIFIRDh6I1/view?usp=drive_link",
  },
  {
    title: "Civil War",
    description: "A superhero conflict erupts when the government enforces a registration act, pitting Iron Man against Captain America. A thought-provoking and action-packed saga that reshaped Marvel's universe.",
    image: require("../assets/cicil war.png"),
    link: "https://drive.google.com/file/d/18UvDeajVPmyZhJRM-Vh6z_2lCNmeNmkd/view?usp=drive_link",
  },
  {
    title: "Daredevil: Born Again",
    description: "Matt Murdock’s life spirals out of control after Kingpin discovers his identity as Daredevil. A gritty, intense, and deeply personal exploration of Daredevil’s character.",
    image: require("../assets/dare devil .png"),
    link: "https://drive.google.com/file/d/1fUAqsXIP9cHoWwcKL8ctu0Hh95-dY284/view?usp=drive_link",
  },
  {
    title: "Planet Hulk",
    description: "Betrayed and exiled to a distant planet, Hulk rises as a gladiator and savior of an alien world. A unique story of Hulk’s strength and heart in an alien setting.",
    image: require("../assets/plannet hulk.png"),
    link: "https://drive.google.com/file/d/1d_8fgnjChIn3MAUQ1bQozgH4ttucEjmk/view?usp=drive_link",
  },
  {
    title: "World War Hulk",
    description: "Hulk returns to Earth, enraged by betrayal, seeking vengeance on those who wronged him. Explosive action and a deeper exploration of Hulk’s anger.",
    image: require("../assets/world war hulk.png"),
    link: "https://drive.google.com/file/d/18cBvUYW0bfV0DxWMI51q4hcN2zrDR-hA/view?usp=drive_link",
  },
  {
    title: "Immortal Hulk",
    description: "Bruce Banner and the Hulk are reimagined as horror icons, focusing on resurrection and a darker tone. A fresh and chilling take on the Hulk mythos.",
    image: require("../assets/immortal hulk.png"),
    link: "https://drive.google.com/file/d/1f0r8K5bgMNXXOW2vHegEh6CNx-Dn76Bo/view?usp=drive_link",
  },
  {
    title: "Hulk: Gray",
    description: " A reflective story delving into Hulk's early days and Bruce Banner's relationship with Betty Ross. Emotional storytelling with a nostalgic touch.",
    image: require("../assets/hulk gray.png"),
    link: "https://drive.google.com/file/d/1mJ0U1K5UKR4BURicftmNrBMtsDUbmWgf/view?usp=drive_link",
  },
  {
    title: "Batman: The Long Halloween",
    description: "Batman investigates a series of murders that occur on holidays, facing Gotham’s most iconic villains.  A gripping detective story with stunning art and twists.",
    image: require("../assets/batman.png"),
    link: "https://drive.google.com/file/d/1H1m1ZfZ6PHOvtyBrrx05UpWz9BmtlW_F/view?usp=drive_link",
  },
  {
    title: "Superman",
    description: "An alternate history where Superman lands in the Soviet Union instead of Kansas, exploring his role under a communist regime. A unique take on Superman that challenges perceptions of heroism.",
    image: require("../assets/superman.png"),
    link: "https://drive.google.com/file/d/19rAfmkxTyoHD1iJX7XvABKDHLCkLOzCD/view?usp=drive_link",
  },
  {
    title: "Justice league",
    description: " A retelling of Diana’s origin story, her journey from Themyscira to becoming Wonder Woman. A fresh and inspiring look at Wonder Woman’s beginnings.",
    image: require("../assets/justice leage.png"),
    link: "https://drive.google.com/file/d/1KBDlNUkkrdaRLTs8JgknTKlstNR_T6Kq/view?usp=drive_link",
  },
  {
    title: "The Flash: Rebirth",
    description: "Barry Allen’s return as the Flash, unraveling mysteries about the Speed Force and his role in the DC universe. A must-read for Flash fans, blending action and heartfelt moments.",
    image: require("../assets/flash rebirth.png"),
    link: "https://drive.google.com/file/d/1z_ULc7OUfb1ZsJgY9yukAXsTrrP0ZQcI/view?usp=drive_link",
  },
];

const Comic = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Comics</h1>
      <p className="text-center">Explore a wide range of Comics! and downlode the reader
      <Link to ="https://drive.google.com/file/d/1yhk8kUBm1O9zwgNofdQ9km6p_plTza-s/view?usp=drive_link">
          <Button variant="none">click hear </Button>
      </Link></p>
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

export default Comic;