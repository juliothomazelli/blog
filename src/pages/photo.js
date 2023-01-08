import * as React from "react";

const Photo02_full = require("../assets/photo02-full.jpeg");
const Photo03      = require("../assets/photo03.jpeg");
const Photo04      = require("../assets/photo04.jpeg");
const Photo05      = require("../assets/photo05.jpeg");
const Photo06      = require("../assets/photo06.jpeg");
const Photo07      = require("../assets/photo07.jpeg");
const Photo08      = require("../assets/photo08.jpeg");
const Photo09      = require("../assets/photo09.jpeg");
const Photo10      = require("../assets/photo10.jpeg");
const Photo11      = require("../assets/photo11.jpeg");
const Photo12      = require("../assets/photo12.jpeg");
const Photo13      = require("../assets/photo13.png");

export default function Photo() {
  return (
    <div>
      
      <h1 class="text-center font-bold py-10 text-3xl dark:text-white">Fotos</h1>

      <div class="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <div class="w-full row-span-2">
            <img src={Photo13} alt="Casamento do meu irmão." class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full col-span-2 row-span-2">
            <img
              src={Photo12}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full ">
            <img
              src={Photo04}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full">
            <img
              src={Photo05}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full col-span-2 row-span-2">
            <img
              src={Photo03}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>

          <div class="w-full">
            <img
              src={Photo11}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full">
            <img
              src={Photo09}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full">
            <img
              src={Photo07}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
          <div class="w-full">
            <img
              src={Photo08}
              alt="Photo by Claudio Schwarz on Unsplash"
              class="inset-0 h-full w-full object-cover object-center rounded hover:scale-110 cursor-pointer"/>
          </div>
        </div>
      </div>

    </div>
  );
}