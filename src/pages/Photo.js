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
      <div class="p-4 mx-auto max-w-6xl">
        <h2 class="pb-4  font-bold text-center text-gray-800 text-4xl dark:text-gray-400">
          Minha galeria
        </h2>
        <div class="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400"></div>
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo07} alt="A picture of a sitting dog" class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                    {/* <path
                      d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" /> */}
                    {/* <path
                      d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /> */}
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  São Francisco do Sul</a>
                <p class="text-gray-300 text-xs mb-0">Noite de ano novo - 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

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

