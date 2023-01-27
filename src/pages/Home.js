import * as React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

const WelcomeImageFull = require("../assets/photo02-full.jpeg");
const WelcomeImage     = require("../assets/photo02.jpeg");
const WelcomeBanner    = require("../assets/welcome-banner.png");

export default function Home() {
  return (
    <div>
      <article className="m-3 bg-gray rounded-lg border border-gray-200 shadow-2xl">
        <div className="m-5 container py-5 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
              <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-48 lg:h-72" src={WelcomeBanner} alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                  Bem-vindos(as)!
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Sejam todos bem vindos ao meu blog pessoal, meu nome é Julio, sou formado e trabalho com tecnologia há aproximadamente 6 anos.
                Meu foco para com este blog é compartilhar experiências, conhecimentos e um pouco da minha vida pessoal e profissional.
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Leia mais</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src={WelcomeImage} alt=""/>

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Julio Thomazelli</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">12/01/2023</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
