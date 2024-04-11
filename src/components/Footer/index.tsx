import React from "react";
import Button from "../Button";
import {
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col md:flex-row justify-around items-center mt-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={require("../../assets/logo.jpg")}
            alt="Logo tipo BrilhanTI"
            className="w-16 rounded-xl"
          />
          <a
            className="2xl:text-base 3xl:text-xl 4xl:text-2xl text-white mt-2"
            href="mailto:laryssa.brilhante@hotmail.com"
          >
            laryssa.brilhante@hotmail.com
          </a>
          <a
            className="2xl:text-base 3xl:text-xl 4xl:text-2xl text-white mt-2"
            href="https://wa.me/5588996488674"
            target="_blank"
            rel="noreferrer"
          >
            (88) 99648-8674
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-start 4xl:text-2xl text-white font-bold">
            Links Rápidos
          </span>
          <a
            href="#about"
            className="text-base md:text-lg 4xl:text-lg mt-2 text-gray-400"
          >
            Empresa
          </a>
          <a
            href="#technologies"
            className="text-base md:text-lg 4xl:text-lg mt-2 text-gray-400"
          >
            Tecnologia
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-white">--------</span>
          <a
            href="#services"
            className="text-base md:text-lg 4xl:text-lg mt-2 text-gray-400"
          >
            Serviços
          </a>
          <a
            href="#contacts"
            className="text-base md:text-lg 4xl:text-lg mt-2 text-gray-400"
          >
            Contato
          </a>
        </div>
        <div className="h-full flex flex-col md:items-start items-center space-y-4 mb-6">
          <span className="4xl:text-2xl text-white font-bold">Contate-nos</span>

          <Button href="#contacts" icon={FaPaperPlane} label="Enviar Mensagem" />
        </div>
      </div>
      <div className="flex flex-col justify-around items-center md:flex-row border-t-2 border-gray-700">
        <div className="flex items-center mb-4 mt-4">
          <a
            href="https://wa.me/5588996488674"
            target="_blank"
            rel="noreferrer"
            className="border border-1 rounded-3xl p-1 mr-2 lg:p-2 lg:mr-3 3xl:mr-4             
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaWhatsapp size={25} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/laryssa-brilhante-ab15b11b5"
            target="_blank"
            rel="noreferrer"
            className="border border-1 rounded-3xl p-1 mr-2 lg:p-2 lg:mr-3 3xl:mr-4           
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaLinkedin size={25} color="white" />
          </a>
          <a
            href="https://www.instagram.com/solilorys"
            target="_blank"
            rel="noreferrer"
            className="border border-1 rounded-3xl p-1 mr-2 lg:p-2 lg:mr-3 3xl:mr-4  
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaInstagram size={25} color="white" />
          </a>
        </div>
        <div className="mb-4 mt-4">
          <p className="text-base md:text-lg 4xl:text-lg text-white font-bold">
            @ 2024 BrilhanTI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
