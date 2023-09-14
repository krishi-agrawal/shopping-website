import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({item}) => {
    return(
        <Link className="link" to={`product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={item.image} className="mainImg"></img>
                <img src={item.image2} className="secondImg"></img>
            </div>
            <div className="title">
                <h2>{item.name}</h2>
            </div>
            <div className="prices">
                <h3>{item.old_price}</h3>
                <h3>{item.price}</h3>
            </div>
        </div>
        </Link>
    )
   
}

export default Card