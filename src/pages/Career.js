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
              <p class="mb-16 text-base text-center">
                Abaixo compartilho um pouco da minha história na area de sistemas de informação.
              </p>
            </div>
          </div>
          <div class="w-full mx-auto lg:max-w-1xl">
            <div class="relative flex justify-between">
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
                    <span class="text-x text-gray-100">08/03/2021 - Atual</span>
                  </div>
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    CLINICORP SERVIÇOS S.A.
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Como engenheiro de software na Clinicorp, sou responsável pelo desenvolvimento e manutenção de aplicações voltadas para o ramo de Fintech, com foco em desenvolver aplicações de POS e API Gateway de pagamento altamente escaláveis e robustos que atendam clínicas odontológicas.

                    Desenvolvimento de Software: Projeto, codificação, teste e manutenção de funcionalidades para aplicações web usando JavaScript, React e Node.js.

                    Colaboração em Equipe: Trabalho em conjunto com equipes de produto e design para definir especificações técnicas e desenvolver novas funcionalidades que melhoram a experiência do usuário.

                    Revisão de Código: Realizo revisões de código regulares para garantir a qualidade do código e aderência às melhores práticas de desenvolvimento.

                    <h2 class="mt-4 text-base font-medium text-gray-700">Tecnologias e atribuições:</h2>

                    <ol class="mt-4 space-y-4 list-decimal list-inside">
                      <li>
                        NodeJS
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver API's para o Backend em que o sistema principal utiliza para visualização de dados e regras.</li>
                          <li>Solucionar bugs do sistema de códigos legados e novos incorporados.</li>
                          <li>Integrar com API's Gateways de financeiras que servem como ponte para criação de contas e pagamentos.</li>
                        </ul>
                      </li>
                      <li>
                        MySQL
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Indices / Triggers / Procedures / Views / Joins.</li>
                          <li>Incorporar consultas, análises e inserções para dentro do sistema como regras de negócios de novas features.</li>
                        </ul>
                      </li>
                      <li>
                        React - (JavaScript)
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Manter e desenvolver telas que necessitem de alguma melhoria ou ajuste.</li>
                        </ul>
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
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
                    <span class="text-x text-gray-100">25/06/2019 - 05/03/2021</span>
                  </div>
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    VOCE PEDE SOFTWARES PARA BARES E RESTAURANTES LTDA.
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                  Como engenheiro de software na Voce pede - Softwares, fui responsável por desenvolver desde a concepção do produto até a implantação de produtos voltados para o setor alimentício como bares e restaurantes. 
                  Alguns resultados notáveis como desenvolvimento de uma aplicação de pedidos pelos clientes, aplicações para gerenciamento de mesas e pedidos para garçons, integrações com API de Ifood e UberEats, monitoramento dos servidores em tempo real e entre outros que fizeram parte da minha jornada riquíssima de conhecimento nesta empresa.

                  Desenvolvimento de Software: Projeto, codificação, teste e manutenção de funcionalidades para aplicações web usando TypeScript e NodeJS para servidores de monitoramento, Angular para o sistema utilizado para gerenciamento dos estabelecimentos, Object Pascal como servidores (Locais para sincronização e em Nuvem), Android para aplicativos utilizados pelos garçons e Ionic para pedidos de clientes finais.

                  Concepção do produto: Estudo de possíveis novas funcionalidades que poderiam vir a agregar o produto, viabilidade e boa experiência ao usuário.

                  Revisão de Código: Com uma equipe enxuta de somente dois desenvolvedores revisões de código regulares eram feitas para garantir a qualidade do código e aderência às melhores práticas de desenvolvimento.
                  </p>

                  <p class="text-gray-700 dark:text-gray-500">
                    <h2 class="mt-4 text-base font-medium text-gray-700">Tecnologias e atribuições:</h2>

                    <ol class="mt-4 space-y-4 list-decimal list-inside">
                      <li>
                        NodeJS - (TypeScript)
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver um sistema de monitoramento de problemas e falhas que ocorrem nas aplicações principais.</li>
                        </ul>
                      </li>
                      <li>
                        Pascal
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver API's que serão consumidas pelas aplicações internas.</li>
                          <li>Integração de API's com IFood e UberEats para acompanhamento de pedidos feitos pelo aplicativo do Ifood para o estabelecimento.</li>
                          <li>Prestar suporte e manter uma aplicação que fique rodando em segundo plano para sincronizar dados se o sistema ficar desconectado de internet.</li>
                        </ul>
                      </li>
                      <li>
                        Firebird / PostgreSQL
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Indices / Triggers / Procedures / Views / Joins.</li>
                          <li>Incorporar consultas, análises e inserções para dentro do sistema como regras de negócios de novas features.</li>
                        </ul>
                      </li>
                      <li>
                        Angular
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver e manter features para o sistema Web dos clientes (Bares e Restaurantes).</li>
                          <li>Features desenvolvidas como Mesas, Relatórios, Cupom de desconto.</li>
                          <li>Parte visual das integrações de API's (Ifood & UberEats) realizadas para acompanhamento de pedidos.</li>
                        </ul>
                      </li>
                      <li>
                        Ionic
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver do zero até a implantação final do software utilizados por cliente finais.</li>
                          <li>Software desenvolvido para clientes finais solicitarem pedidos de lanches e demais comidas, semelhante ao Ifood.</li>
                        </ul>
                      </li>
                      <li>
                        Java (Android Nativo)
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver aplicações para aplicativo móvel (Mobile) utilizado por Garçons.</li>
                          <li>Desenvolver features como carrinho, mesas, cardápios e algumas outras funcionalidades utilizadas por Garçons no momento do atendimento.</li>
                        </ul>
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex justify-between">
              <div class="hidden py-3 w-36 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">Programador de sistemas de informação</h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10  dark:border-blue-400">
                    <img className="border border-blue-500 rounded-full" src={dessisLogo} />
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
                    <span class="text-x text-gray-100">10/08/2017 - 21/06/2019</span>
                  </div>
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    DESSIS INFORMÁTICA LTDA.
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Sendo meu primeiro emprego na área de engenharia de software, na Dessis eu era responsável pelo desenvolvimento e manutenção de um sistema ERP voltado para empresas de grande porte como industrias têxteis, vidros, metais e contábeis. Algumas das minhas atuações na empresa foram o processo de implementação e configurações iniciais para novos clientes, organizando bases de dados e as 
                    gerenciando, desenvolvimento de ferramentas de uso interno que proveram uma maior agilidade em processos feitos pelo suporte e uma pequena parcela do meu tempo na empresa dando manutenção para os processos de NFe, MDFe e CTe.
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    <h2 class="mt-4 text-base font-medium text-gray-700">Tecnologias e atribuições:</h2>

                    <ol class="mt-4 space-y-4 list-decimal list-inside">
                      <li>
                        Delphi
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver soluções para os setores industriais e contábeis.</li>
                          <li>Solucionar bugs do sistema de códigos legados e novos incorporados recentemente.</li>
                          <li>Desenvolver novas funcionalidades, features e componentes que agreguem ao ERP.</li>
                        </ul>
                      </li>
                      <li>
                        SQL Server / Firebird
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Indices / Triggers / Procedures / Views / Joins / Sub-Selects.</li>
                          <li>Implantar e desenvolver base de dados zeradas para novos clientes.</li>
                          <li>Performar e manipular base de dados de clientes.</li>
                          <li>Incorporar consultas, análises e inserções para dentro do sistema como regras de negócios de novas features.</li>
                        </ul>
                      </li>
                      <li>
                        Report Builder (BI)
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                          <li>Desenvolver relatórios para visualização de dados pelo cliente.</li>
                        </ul>
                      </li>
                    </ol>
                  </p>
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
