import React from "react";
import Card from "./Card.jsx";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "My title 1",
    image: image1,
    url: "https://www.google.com",
    text: "This is Google website"
  },
  {
    id: 2,
    title: "My title 2",
    image: image2,
    url: "https://www.youtube.com",
    text: "This is Youtube website"
  },
  {
    id: 3,
    title: "My title 3",
    image: image3,
    url: "https://www.twitch.tv",
  },
];

function CardList() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({id, image, title, url, text}) => {
          return (
            <div className="col-md-4" key={id}>
              <Card title={title} image={image} url={url} text={text}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
