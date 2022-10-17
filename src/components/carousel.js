import React, { useState, useEffect, } from 'react';

const Photo02_full      = require("../assets/photo02-full.jpeg");
const Photo03           = require("../assets/photo03.jpeg");
const Photo04           = require("../assets/photo04.jpeg");
const Photo05           = require("../assets/photo05.jpeg");
const Photo06           = require("../assets/photo06.jpeg");
const Photo06_full      = require("../assets/photo06-full.jpeg");
const Photo06_full_mini = require("../assets/photo06-full-mini.jpeg");
const Photo07           = require("../assets/photo07.jpeg");
const Photo08           = require("../assets/photo08.jpeg");
const Photo09           = require("../assets/photo09.jpeg");
const Photo10           = require("../assets/photo10.jpeg");
const Photo11           = require("../assets/photo11.jpeg");
const Photo12           = require("../assets/photo12.jpeg");

export default function Carousel(props) {
  const [image, setImage] = useState(props.image);
  
  function getImageHTML(image){
    let html;

    if (image == 1){
      html =  (
        <div className="carousel-item relative w-full">
          <img src={Photo02_full} className=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div onClick={() => { setImage(9) }} className="btn btn-circle bg-red">❮</div>
            <div onClick={() => { setImage(2) }} className="btn btn-circle">❯</div>
          </div>
        </div>
      );
    }

    if (image == 2){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo03}/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(1) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(3) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 3){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo04}/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(2) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(4) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 4){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo05}/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(3) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(5) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 5){
      html = (
        <div className="carousel-item relative w-full flex justify-center">
          <img src={Photo06_full_mini}/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(4) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(6) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 6){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo11} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(5) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(7) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 7){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo07} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(6) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(8) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 8){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo09} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(7) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(9) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    if (image == 9){
      html = (
        <div className="carousel-item relative w-full">
          <img src={Photo08} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => { setImage(8) }} className="btn btn-circle">❮</a> 
            <a onClick={() => { setImage(1) }} className="btn btn-circle">❯</a>
          </div>
        </div>
      );
    }

    return html;
  }

  return (
    <div>
      <div className="carousel w-full h-full">
        {
          image == 1 ? getImageHTML(1) : undefined
        }

        {
          image == 2 ? getImageHTML(2) : undefined
        }

        {
          image == 3 ? getImageHTML(3) : undefined
        }
        
        {
          image == 4 ? getImageHTML(4) : undefined
        }

        {
          image == 5 ? getImageHTML(5) : undefined
        }

        {
          image == 6 ? getImageHTML(6) : undefined
        }

        {
          image == 7 ? getImageHTML(7) : undefined
        }

        {
          image == 8 ? getImageHTML(8) : undefined
        }

        {
          image == 9 ? getImageHTML(9) : undefined
        }

      </div>
    </div>
  );
}