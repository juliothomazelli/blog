import React, { useState, useEffect } from 'react';
import { Alert, Modal, Accordion, Button, Carousel } from "flowbite-react";

const Photo02_full = require("../assets/photo02-full.jpeg");
const Photo03 = require("../assets/photo03.jpeg");
const Photo04 = require("../assets/photo04.jpeg");
const Photo05 = require("../assets/photo05.jpeg");
const Photo07 = require("../assets/photo07.jpeg");
const Photo08 = require("../assets/photo08.jpeg");
const Photo09 = require("../assets/photo09.jpeg");
const Photo10 = require("../assets/photo10.jpeg");
const Photo11 = require("../assets/photo11.jpeg");
const Photo12 = require("../assets/photo12.jpeg");
const Photo13 = require("../assets/photo13.png");

export default function Photo() {
  const [showModal, setShowModal] = useState(false);
  const [photos, setPhotos] = useState(["Photo03"]);

  return (
    <div>
      <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div class="text-center">
          <h2 class="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">Galeria de fotos</h2>
          <p class="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">Esses são alguns dos lugares em que já visitei!</p>
        </div>

        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10 cursor-pointer">
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo04} alt="A picture of a sitting dog" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo03} alt="Smiling Girl" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo05} alt="Men Posing" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo09} alt="2 puppies" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
        </div>
      
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10 cursor-pointer">
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo07} alt="A picture of a sitting dog" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo08} alt="Smiling Girl" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo10} alt="Men Posing" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 rounded-lg to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
          <div class="relative group" onClick={() => { openModal() }}>
            <img src={Photo11} alt="2 puppies" class="shadow-2xl object-cover w-full rounded-lg h-96" />
            <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal className="h-full" show={showModal} slideInterval={1000}>
        <Modal.Body>
          <div className="object-cover w-full rounded-lg h-96 overflow-hidden">
            <Carousel>
              <img src={Photo03} alt="..." />
              <img src={Photo04} alt="..." />
            </Carousel>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { closeModal() }}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
}

