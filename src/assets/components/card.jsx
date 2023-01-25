import React from "react";

const Card = function (props) {
    console.log(props);
    return (
      <div className="card">
        <div className="card__image-container">
          <img
            src={`${props.imageUrl}`}
            alt={`${props.title}`}
            className="img "
          />
        </div>
        <div className="card__content">
          <div className="card__content--location">
            <img src="./src/assets/images/fill 220.svg" alt="" />
            <span className="location">{props.location}</span>
            <a href={`${props.googleMapsUrl}` }target="_blank">View on Google Map</a>
          </div>
          <h1 className="title">{props.title}</h1>
          <div className="opens">
            <span className="opensAt">{props.startDate}</span> -
            <span className="closesAt">{props.endDate}</span>
          </div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    );
}
export {Card}