import React from "react";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Students",
    description: "Academic books for school students",
    image: require("../assets/students.png"),
    link: "/students", // Use a route path
  },
  {
    title: "College Students",
    description: "Higher education textbooks",
    image: require("../assets/college.png"),
    link: "/college-students", // Add appropriate routes
  },
  {
    title: "GATE Exams",
    description: "Preparation materials for GATE",
    image: require("../assets/gate.png"),
    link: "/gate",
  },
  {
    title: "Comics",
    description: "Graphic novels and comic books",
    image: require("../assets/comics.png"),
    link: "/comics",
  },
  {
    title: "Manga",
    description: "Japanese comics and graphic novels",
    image: require("../assets/manga.png"),
    link: "/manga",
  },
  {
    title: "Novels",
    description: "Fiction and literature books",
    image: require("../assets/novels.png"),
    link: "/novels",
  },
  {
    title: "Lifestyle",
    description: "Self-help and personal development books",
    image: require("../assets/lifestyle.png"),
    link: "/lifestyle",
  },
  {
    title: "Science",
    description: "Books on Physics",
    image: require("../assets/physics.png"),
    link: "/physics",
  },
  {
    title: "Astronomy ",
    description: "Books on Astronomy",
    image: require("../assets/astronomy.png"),
    link: "/astronomy",
  },
];

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = (link) => {
    navigate(link); // Navigate to the specified route
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to Classic Pages Library</h1>
      <p className="text-center">Explore books across various categories!</p>
      <div className="row">
        {categories.map((category, index) => (
          <div
            className="col-md-4 mb-3"
            key={index}
            onClick={() => handleCardClick(category.link)} // Handle card click
            style={{ cursor: "pointer" }}
          >
            <CategoryCard
              title={category.title}
              description={category.description}
              image={category.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
