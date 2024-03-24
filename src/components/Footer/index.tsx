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
      <div className="flex justify-around items-start mt-8 border-b-2 border-gray-700">
        <div className="flex flex-col items-start">
          <img
            src={require("../../assets/logo.jpg")}
            alt="Logo tipo BrilhanTI"
            className="w-16"
          />
          <p className="4xl:text-2xl text-white mt-2">
            laryssa.brilhante@hotmail.com
          </p>
          <p className="4xl:text-2xl text-white mt-2">+55 (88) 99648-8674</p>
        </div>
        <div className="flex flex-col items-start">
          <span className="4xl:text-2xl text-white font-bold">
            Links Rápidos
          </span>
          <a className="4xl:text-lg mt-2 text-gray-400">Empresa</a>
          <a className="4xl:text-lg mt-2 text-gray-400">Tecnologia</a>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white">------</span>
          <a className="4xl:text-lg mt-4 text-gray-400">Serviços</a>
          <a className="4xl:text-lg mt-2 text-gray-400">Contato</a>
        </div>
        <div className="h-full space-y-4 mb-6">
          <span className="4xl:text-2xl text-white font-bold">Contate-nos</span>
          <Button icon={FaPaperPlane} label="Enviar mensagem" />
        </div>
      </div>
      <div className="flex justify-around items-start">
        <div className="flex items-center mb-8">
        <a
            href=""
            className="border border-1 rounded-3xl p-2 3xl:mr-4              
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaWhatsapp size={30} color="white" />
          </a>
          <a
            href=""
            className="border border-1 rounded-3xl p-2 3xl:mr-4           
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaLinkedin size={30} color="white" />
          </a>
          <a
            href=""
            className="border border-1 rounded-3xl p-2 3xl:mr-4
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaInstagram size={30} color="white" />
          </a>
        </div>
        <div>
          <p className="4xl:text-sm text-white font-bold">@ 2024 BrilhanTI. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
