import React, { useState, useEffect, } from 'react';
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const logo = require("../assets/logo.png");

const Header = () => {
  const [navigation, setNavigation] = useState([
      { name: 'Feed', href: '/', current: true },
      { name: 'Carreira', href: '/career', current: false },
      { name: 'Fotos', href: '/photo', current: false },
      { name: 'Contato', href: '/contact', current: false },
      { name: 'Sobre', href: '/about', current: false },
    ]);
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function changeScreen(screen){
    if (screen.name === "Feed"){
      setNavigation(
        [
          { name: 'Feed', href: '/', current: true },
          { name: 'Carreira', href: '/career', current: false },
          { name: 'Fotos', href: '/photo', current: false },
          { name: 'Contato', href: '/contact', current: false },
          { name: 'Sobre', href: '/about', current: false },
        ]
      );
    }

    if (screen.name === "Carreira"){
      setNavigation(
        [
          { name: 'Feed', href: '/', current: false },
          { name: 'Carreira', href: '/career', current: true },
          { name: 'Fotos', href: '/photo', current: false },
          { name: 'Contato', href: '/contact', current: false },
          { name: 'Sobre', href: '/about', current: false },
        ]
      );
    }

    if (screen.name === "Fotos"){
      setNavigation(
        [
          { name: 'Feed', href: '/', current: false },
          { name: 'Carreira', href: '/career', current: false },
          { name: 'Fotos', href: '/photo', current: true },
          { name: 'Contato', href: '/contact', current: false },
          { name: 'Sobre', href: '/about', current: false },
        ]
      );
    }

    if (screen.name === "Contato"){
      setNavigation(
        [
          { name: 'Feed', href: '/', current: false },
          { name: 'Carreira', href: '/career', current: false },
          { name: 'Fotos', href: '/photo', current: false },
          { name: 'Contato', href: '/contact', current: true },
          { name: 'Sobre', href: '/about', current: false },
        ]
      );
    }

    if (screen.name === "Sobre"){
      setNavigation(
        [
          { name: 'Feed', href: '/', current: false },
          { name: 'Carreira', href: '/career', current: false },
          { name: 'Fotos', href: '/photo', current: false },
          { name: 'Contato', href: '/contact', current: false },
          { name: 'Sobre', href: '/about', current: true },
        ]
      );
    }
  }

  return (
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="block h-8 w-auto lg:hidden" src={logo} alt="Your Company" />
                    <img className="hidden h-8 w-auto lg:block" src={logo} alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','px-3 py-2 rounded-md text-sm font-medium')} onClick={() => {changeScreen(item)}} to={item.href}>{item.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')} aria-current={item.current ? 'page' : undefined}>
                    <Link className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','px-3 py-2 rounded-md text-sm font-medium')} onClick={() => {changeScreen(item)}} to={item.href}>{item.name}</Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  )
};

export default Header;