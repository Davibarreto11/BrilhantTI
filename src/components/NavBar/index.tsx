import React, { useState } from "react";
import { COLORS } from "../../styles/theme";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const buttonClasses = isVisible
    ? `hidden w-full md:flex md:items-center md:w-auto bg-primaryPurple`
    : "w-full md:flex md:items-center md:w-auto";

  return (
    <header>
      <nav
        className={`
        lg:ml-auto
        lg:mr-auto
        md:w-full
        lg:w-5/6
        flex
        flex-wrap
        items-center
        justify-between
        bg-primaryPurple
        p-4
        md:py-0
        lg:px-8
        lg:py-6
        `}
      >
        <a className="w-12 md:w-14 lg:w-16 3xl:w-24" href="">
          <img
            className="object-center rounded-2xl"
            src={require('../../assets/logo.jpg')}
            alt=""
          />
        </a>

        <svg
          xmlns="https://www.w3.org/2000/svg"
          className="
          block
          h-6
          w-6
          cursor-pointer
          md:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          color="white"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

        <button className={buttonClasses}>
          <ul
            id="menu"
            className="
              pt-4
              text-base
              md:flex
              d:justify-between
              md:pt-0"
          >
            <li>
              <a
                className="block py-2 text-white md:p-4 lg:text-xl 2xl:text-3xl 3xl:text-3xl"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="block py-2 text-white hover:text-red-400 md:p-4 lg:text-xl 2xl:text-3xl 3xl:text-3xl"
                href="#responsabilities"
              >
                O que fazemos
              </a>
            </li>
            <li>
              <a
                className="block py-2 text-white md:p-4 lg:text-xl 2xl:text-3xl 3xl:text-3xl"
                href="#contacts"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="block py-2 text-white font-bold md:p-4 lg:text-xl 2xl:text-3xl 3xl:text-3xl"
                href="mailto:gabrielferreira019@gmail.com"
              >
                Peça um orçamento
              </a>
            </li>
          </ul>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
