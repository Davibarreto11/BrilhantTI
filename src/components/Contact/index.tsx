import React, { useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { COLORS } from "../../styles/theme";
import Button from "../Button";

const Contact: React.FC = () => {
  const [name, setName] = useState(String);
  const [email, setEmail] = useState(String);
  const [message, setMessage] = useState(String);
  const [type, setType] = useState(String);
  const [selected, setSelected] = useState(Boolean);

  const sendEmail = () => {};

  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center justify-center">
      <div className="md:mt-12 md:items-center lg:items-start 3xl:h-full 3xl:w-2/6 flex flex-col 3xl:justify-evenly">
        <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl">
          Vamos discutir algo
          <span className="text-primaryPink font-bold"> incrível </span>
          juntos!
        </h2>
        <div>
          <div className="flex items-center ml-3 sm:ml-10 mt-24 3xl:mt-0">
            <FaEnvelope size={30} color={COLORS.pimaryPink} />
            <p className="ml-2 text-xl 4xl:text-2xl">
              laryssa.brilhante@hotmail.com
            </p>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="ml-2 text-xl 3xl:text-xl bg-primaryPink p-4 pr-10 sm:pr-28 xl:pr-36 pl-14 rounded-xl opacity-75"
              value="+55 (88) 99648-8674"
            />
            <FaPhoneAlt
              className="absolute ml-6"
              size={30}
              color={COLORS.pimaryPink}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-24">
          <a
            href=" https://wa.me/996488674"
            target="_blank"
            rel="noreferrer"
            className="                
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaWhatsapp size={30} className="mr-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/laryssa-brilhante-ab15b11b5"
            target="_blank"
            rel="noreferrer"
            className="                
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaLinkedin size={30} className="mr-5" />
          </a>
          <a
            href="https://www.instagram.com/solilorys/"
            target="_blank"
            rel="noreferrer"
            className="                
              transition 
              ease-in-out 
              delay-15 
              hover:-translate-y-1 
              hover:scale-110
              duration-300"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="w-4/5 md:w-2/3 md:mb-4 lg:w-1/2 xl:w-3/6 2xl:w-3/6 3xl:w-2/6 bg-primaryPink rounded-xl p-8 3xl:h-[650px] 4xl:h-[800px] mb-6 mt-8 md:mt-8 lg:mt-0">
        <div className="h-full flex flex-col items-center lg:items-start md:justify-center lg:justify-between">
          <div>
            <span className="md:text-xl lg:text-2xl 3xl:text-4xl text-white">
              Estou interessado(a) em...
            </span>
            <div className="flex items-center mt-5">
              <button
                onClick={() => {
                  setSelected(!selected);
                  console.log(selected);
                  setType("UI/UX design");
                }}
                className={`
                  bg-transparent 
                  border
                  border-white rounded-xl
                  text-white 
                  lg:w-40 xl:w-52
                  p-4 
                  mr-6
                  ${
                    selected
                      ? "bg-white text-black transition ease-in-out delay-15 -translate-y-1 scale-110 duration-300"
                      : ""
                  }
                  `}
              >
                UI/UX design
              </button>
              <button
                onClick={() => {
                  setSelected(!selected);
                  setType("Web design");
                }}
                className={`
                  bg-transparent 
                  border
                  border-white rounded-xl
                  text-white 
                  lg:w-40 xl:w-52
                  p-4 
                  mr-6
                  ${
                    selected
                      ? ""
                      : "bg-white text-black transition ease-in-out delay-15 -translate-y-1 scale-110 duration-300"
                  }
                  `}
              >
                Web design
              </button>
            </div>
          </div>
          <form
            className="lg:w-full h-1/2 flex flex-col items-start justify-evenly"
            onSubmit={sendEmail}
          >
            <div className="lg:w-full h-1/2 flex flex-col items-start justify-evenly mb-28">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full h-8 bg-primaryPink border-b-2 font-bold text-white 2xl:text-xl 3xl:text-2xl mt-8 lg:mt-4 xl:mt-6 3xl:mt-0"
                type="text"
                placeholder="Nome..."
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full h-8 bg-primaryPink border-b-2 font-bold text-white 2xl:text-xl 3xl:text-2xl mt-8 lg:mt-4 xl:mt-6 3xl:mt-0"
                type="text"
                placeholder="Email..."
              />
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full h-8 bg-primaryPink border-b-2 font-bold text-white 2xl:text-xl 3xl:text-2xl mt-8 lg:mt-4 xl:mt-6 3xl:mt-0"
                type="text"
                placeholder="Mensagem..."
              />
            </div>
            <Button icon={FaPaperPlane} label="Enviar mensagem" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
