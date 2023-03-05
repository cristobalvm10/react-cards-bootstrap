import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ title, image, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={image} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-second">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat expedita, magnam rem recusandae nisi aspernatur molestiae esse sequi dolore inventore, quisquam atque, beatae quis possimus. Quisquam voluptate vitae similique!"}
        </p>
        <a
          href={url}
          target="_blank"
          className="btn btn-outline-secondary rounded-0"
          rel="noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
