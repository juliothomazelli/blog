import './App.css';

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const WelcomeImageFull = require("./assets/photo02-full.jpeg");
const WelcomeImage     = require("./assets/photo02.jpeg");

export function App() {

  return (
    <div>
      <Header/>

      <div>
        <article className="m-5 bg-gray rounded-lg border border-gray-200 shadow-md">
          <div className="lg:flex p-5">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" title="Viajando em Santa Catarina na praia de Sáo Chico.">
              <img src={WelcomeImageFull} className="rounded-lg"/>
            </div>
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  09/10/2022
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Bem vindos(as)!</div>
                <p className="text-gray-700 text-base">Sejam todos bem vindos ao meu blog pessoal, meu nome é Julio, sou formado e trabalho com tecnologia há aproximadamente 6 anos.
                    Meu foco para com este blog é compartilhar experiências, conhecimentos e um pouco da minha vida pessoal e profissional.</p>
                <br/>
                <p className="text-gray-700 text-base">Sintam-se à vontade para conhecer um pouco sobre mim, obrigado e boa leitura.</p>
              </div>
              <div className="flex items-center">
                <a href="#" className="flex items-center justify-end font-medium hover:underline">
                  Leia mais
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </article>
              
        {/* <div className="h-screen"></div> */}
        <Footer />
      </div>
    </div>
  )
}

export default App;
