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
      <div class="m-10 mx-auto max-w-6xl">
        <h2 class="pb-4 font-bold text-center text-gray-800 text-4xl dark:text-gray-400">Minha galeria</h2>

        <div class="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo07} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
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

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo03} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  São Francisco do Sul</a>
                <p class="text-gray-300 text-xs mb-0">Visita na Ilha do Araujo de fora II - 2021</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo05} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  Curitiba</a>
                <p class="text-gray-300 text-xs mb-0">Arena da Baixada (Athletico PR) - 2022</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo09} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  Jaraguá do Sul</a>
                <p class="text-gray-300 text-xs mb-0">Minha Bicicleta - 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo04} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href="" class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  Enseada</a>
                <p class="text-gray-300 text-xs mb-0">Mirante de Enseada - 2022</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo08} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  Pomerode</a>
                <p class="text-gray-300 text-xs mb-0">Osterfest - 2019</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo10} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  São Francisco do Sul</a>
                <p class="text-gray-300 text-xs mb-0">Visita na Ilha do Araujo de fora II - 2021</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-md shadow-sm overflow-hidden group">
            <img src={Photo11} alt="A picture of a sitting dog" class="scale-75 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 shadow-2xl object-cover w-full rounded-lg h-96 transition duration-500" />
            <div class="absolute inset-0 h-96 group-hover:bg-black opacity-50 transition duration-500 z-0">
            </div>
            <div>
              <div class=" absolute z-10 hidden group-hover:block top-4 right-4">
                <a href="#"
                  class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                  </svg>
                </a>
              </div>
              <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                <a href=""
                  class="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500">
                  Jaraguá do Sul</a>
                <p class="text-gray-300 text-xs mb-0">Meu carro - 2018</p>
              </div>
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

