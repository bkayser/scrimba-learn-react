import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, description, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - description
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import Star from "../images/star.png";
export default function Card({ coverImg, stats, location, title, price, openSpots } ) {
    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    } 
    return (
        <div className="card">
            <div className={badgeText ? 'card__badge' : 'card__badge--hidden'}>{badgeText}</div>
            <img className="card__image" src={"/media/" + coverImg} />
            <div className="card__summary">
                <img className="star" src={Star} />
                <div className="card__rating">
                    {stats.rating}
                </div>
                <div className="card__rating card__rating--faded">
                    ({stats.reviewCount}) &middot; {location}
                </div>
            </div>
            <p className="card__title">
                {title}
            </p>
            <p className="card__price">
                From ${price}
                <span className="card__price--faded"> / person</span>
            </p>
        </div>
    )
}