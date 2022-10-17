import React, { useState, useEffect, } from 'react';

import Carousel from "../components/carousel";

export default function Modal(props) {
  const [image, setImage] = useState(1);

  return (
    <div>
      <div className="modal" id="gallery-1">
        <div className="modal-box">
          <Carousel image={1}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-2">
        <div className="modal-box">
          <Carousel image={2}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-3">
        <div className="modal-box">
          <Carousel image={3}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-4">
        <div className="modal-box">
          <Carousel image={4}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-5">
        <div className="modal-box">
          <Carousel image={5}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-6">
        <div className="modal-box">
          <Carousel image={6}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-7">
        <div className="modal-box">
          <Carousel image={7}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-8">
        <div className="modal-box">
          <Carousel image={8}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>

      <div className="modal" id="gallery-9">
        <div className="modal-box">
          <Carousel image={9}/>
          <div className="modal-action">
            <a href="#" className="btn">Fechar!</a>
          </div>
        </div>
      </div>
    </div>
  );
}