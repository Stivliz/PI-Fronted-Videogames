import { Link } from "react-router-dom";
// import React, { useState } from "react";
import style from "./Cards.module.css";

const Cards = ({ id, img, name, genres, rating }) => {


  
  return (
    <div className={style.card}>
      <Link to={`/videogames/${id}`}>
          <div className={style.cardImg}>
            <img src={img} alt={name} />
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>{name}</h2>
            <p className={style.cardRating}>{rating}</p>
            <p className={style.cardGenres}>{
              typeof genres === 'string'
              ? genres
              :(genres?.map(g => g.name).join( ' | '))
            }
            </p>
            
          </div>
      </Link>
    </div>
  );
};

export default Cards;



