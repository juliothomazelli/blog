import * as React from "react";
const clinicorpLogo = require("../assets/clinicorp-logo.png");
const vocepedeLogo = require("../assets/voce-pede-logo.png");
const dessisLogo = require("../assets/dessis-logo.png");

export default function Career() {
  return (
    <div>
      <section class="items-center py-4 bg-gray-100 font-poppins dark:bg-gray-800">
        <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="max-w-xl mx-auto">
            <div class="text-center ">
              <div class="flex flex-col items-center ">
                <h1 class="text-5xl font-bold leading-tight dark:text-white">Julio Thomazelli</h1>
                <div class="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                  <div class="flex-1 h-2 bg-blue-200">
                  </div>
                  <div class="flex-1 h-2 bg-blue-400">
                  </div>
                  <div class="flex-1 h-2 bg-blue-600">
                  </div>
                </div>
              </div>
              <p class="mb-16 text-base text-center text-gray-500">
                Abaixo compartilho um pouco da minha história na area de sistemas de informação.
              </p>
            </div>
          </div>
          <div class="w-full mx-auto lg:max-w-1xl">
            <div class="relative flex justify-between cursor-pointer">
              <div class="hidden py-3 w-36 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">Analista de desenvolvimento de sistemas</h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 dark:border-blue-400">
                    <img className="border border-blue-500 rounded-full" src={clinicorpLogo} />
                  </div>
                </div>
                <div class="w-px h-full bg-blue-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                  <div class="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg">
                  </div>
                </div>
                <div class="relative z-20 p-6">
                  <div class="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                    <span class="text-xs text-gray-100">08/03/2021 - Atual</span>
                  </div>
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    CLINICORP SERVIÇOS S.A
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Fintech
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between cursor-pointer">
              <div class="hidden py-3 w-36 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">Programador de sistemas de informação</h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10  dark:border-blue-400">
                    <img className="border border-blue-500 rounded-full" src={vocepedeLogo} />
                  </div>
                </div>
                <div class="w-px h-full bg-blue-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                  <div class="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg">
                  </div>
                </div>
                <div class="relative z-20 p-6">
                  <div class="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5  dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                    <span class="text-xs text-gray-100">25/06/2019 - 05/03/2021</span>
                  </div>
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    VOCE PEDE SOFTWARES PARA BARES E RESTAURANTES LTDA
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden group">
              <div class="relative flex justify-between cursor-pointer">
                <div class="hidden py-3 w-36 md:block">
                  <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">Programador de sistemas de informação</h2>
                </div>
                <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 dark:border-blue-400">
                      <img className="border border-blue-500 rounded-full" src={dessisLogo} />
                    </div>
                  </div>
                  <div class="w-px h-full bg-blue-300"></div>
                </div>
                <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                  <div class="lg:absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                    <div class="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg">
                    </div>
                  </div>
                  <div class="relative z-20 p-6">
                    <div class="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5  dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                      <span class="text-xs text-gray-100">15/01/2017 - 21/06/2019</span>
                    </div>
                    <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400 group-hover:text-white">
                      DESSIS INFORMÁTICA LTDA
                    </p>
                    <p class="text-gray-700 dark:text-gray-500 group-hover:text-white">
                      Minha primeira experiência na area de tecnologia foi na Dessis, aprendendo e desenvolvendo aplicações em Delphi tanto para o <span className="italic">Client Side</span> quanto para o <span className="italic">Server Side</span>.
                    </p>
                  </div>
                  <div class="absolute inset-0 z-0 group-hover:bg-black opacity-50 rounded">
                    <div class="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function openJobDetail(job) {

}
