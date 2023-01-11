import * as React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

const WelcomeImageFull = require("../assets/photo02-full.jpeg");
const WelcomeImage     = require("../assets/photo02.jpeg");

export default function Home() {
  return (
    <div>
      <article className="m-5 bg-gray rounded-lg border border-gray-200 shadow-2xl">
        <div className="lg:flex p-5">
          <div className="h-48 lg:h-auto lg:w-48 hidden lg:block xl:block flex-none bg-cover text-center overflow-hidden" title="Viajando em Santa Catarina na praia de Sáo Chico.">
            <img src={WelcomeImageFull} className="rounded-lg"/>
          </div>
          <div className="h-48 lg:h-auto lg:w-48 block sm:block md:block lg:hidden xl:hidden flex-none bg-cover text-center overflow-hidden" title="Viajando em Santa Catarina na praia de Sáo Chico.">
            <img src={WelcomeImage} className="rounded-lg"/>
          </div>
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-xs text-gray-600 flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                09/10/2022
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">Bem-vindos(as)!</div>
              <p className="text-gray-700 text-base text-justify">Sejam todos bem vindos ao meu blog pessoal, meu nome é Julio, sou formado e trabalho com tecnologia há aproximadamente 6 anos.
                  Meu foco para com este blog é compartilhar experiências, conhecimentos e um pouco da minha vida pessoal e profissional.</p>
              <br/>
              <p className="text-gray-700 text-base text-justify">Sintam-se à vontade para conhecer um pouco sobre mim, obrigado e boa leitura.</p>
            </div>
            <div className="flex items-center">
            <a href="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-600 bg-blue-200 rounded-lg hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Leia mais
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}