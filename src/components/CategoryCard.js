import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="card shadow-sm"
      style={{
        width: "25rem",
        height: "25rem",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      {/* Image with fixed size */}
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div
        className="card-body text-center"
        style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
