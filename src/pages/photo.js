import React, { useState, useEffect, } from 'react';

import Carousel from "../components/carousel";
import Modal from "../components/modal"

const Photo02_full = require("../assets/photo02-full.jpeg");
const Photo03 = require("../assets/photo03.jpeg");
const Photo04 = require("../assets/photo04.jpeg");
const Photo05 = require("../assets/photo05.jpeg");
const Photo06 = require("../assets/photo06.jpeg");
const Photo07 = require("../assets/photo07.jpeg");
const Photo08 = require("../assets/photo08.jpeg");
const Photo09 = require("../assets/photo09.jpeg");
const Photo10 = require("../assets/photo10.jpeg");
const Photo11 = require("../assets/photo11.jpeg");
const Photo12 = require("../assets/photo12.jpeg");

export default function Photo() {
  return (
    <div>
      <h1 className="text-center font-bold py-7 text-3xl dark:text-white">Fotos</h1>

      <div className="lg:px-32 p-4 items-center">
        <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <a href="#gallery-5" className="w-full row-span-2">
            <img src={Photo06} alt="Casamento do meu irmão." className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-1" className="w-full col-span-2 row-span-2">
            <img src={Photo02_full} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-3" className="w-full">
            <img src={Photo04} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-4" className="w-full">
            <img src={Photo05} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-2" className="w-full col-span-2 row-span-2">
            <img src={Photo03} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-6" className="w-full">
            <img src={Photo11} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-8" className="w-full">
            <img src={Photo09} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-7" className="w-full">
            <img src={Photo07} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
          <a href="#gallery-9" className="w-full">
            <img src={Photo08} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer" />
          </a>
        </div>
      </div>

      <Modal/>

      {/* <div id="modal" className="hidden fixed p-5 top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
        <a className="fixed top-2 right-2 text-white btn text-5xl" href="javascript:void(0)" onClick={() => { closeModal() }}>&times;</a>

        {
          image == 1 ? <img id="modal-img" src={Photo06} alt="Casamento do meu irmão." className="max-w-[200px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 2 ? <img id="modal-img" src={Photo02_full} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 3 ? <img id="modal-img" src={Photo04} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 4 ? <img id="modal-img" src={Photo05} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 5 ? <img id="modal-img" src={Photo03} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 6 ? <img id="modal-img" src={Photo11} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 7 ? <img id="modal-img" src={Photo09} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 8 ? <img id="modal-img" src={Photo07} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

        {
          image == 9 ? <img id="modal-img" src={Photo08} alt="Casamento do meu irmão." className="max-w-[800px] max-h-[600px] object-cover rounded-lg" /> : undefined
        }

      </div> */}
    </div>
  );
}