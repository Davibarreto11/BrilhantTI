import React, { useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { COLORS } from "../../styles/theme";
import Button from "../Button";

const Contact: React.FC = () => {
  const [name, setName] = useState(String);
  const [email, setEmail] = useState(String);
  const [message, setMessage] = useState(String);
  const [type, setType] = useState(String);
  const [selected, setSelected] = useState(Boolean);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      to_name: "Laryssa Brilhante",
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_v3q2w7o",
        "template_ver2p2c",
        templateParams,
        "trQyCKqQXyF3MYwKT"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log({ error: err });
        }
      );
  };

  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center justify-center">
      <div className="md:mt-12 md:items-center lg:items-start 3xl:h-full 3xl:w-2/6 flex flex-col 3xl:justify-evenly">
        <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl mt-4 sm:mt-0">
          Vamos discutir algo
          <span className="text-primaryPink font-bold"> incrível </span>
          juntos!
        </h2>
        <div>
          <div className="flex items-center ml-3 sm:ml-6 mt-24 3xl:mt-0">
            <FaEnvelope size={30} color={COLORS.pimaryPink} />
            <p className="ml-2 text-xl 4xl:text-2xl">
              laryssa.brilhante@hotmail.com
            </p>
          </div>
          <div className="flex items-center mt-7">
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
        <div className="flex items-center justify-center mt-6 lg:mt-16">
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
        <div className="h-full flex flex-col items-center lg:items-start md:justify-center lg:justify-around">
          <div>
            <span className="md:text-xl lg:text-2xl 3xl:text-4xl text-white">
              Estou interessado(a) em...
            </span>
            <div className="flex items-center mt-5 mb-24">
              <button
                onClick={() => {
                  setSelected(!selected);
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
                      ? "text-black bg-white font-bold transition ease-in-out delay-15 -translate-y-1 scale-110 duration-300"
                      : ""
                  }
                  `}
              >
                <p className={`${selected ? "text-black font-bold" : ""}`}>
                  UX design
                </p>
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
                <p className={`${!selected ? "text-black font-bold" : ""}`}>
                  Web design
                </p>
              </button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-evenly">
            <form
              className="w-full h-1/2 flex flex-col items-start justify-evenly"
              onSubmit={sendEmail}
            >
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full outline-none pb-5 bg-primaryPink border-b-2 font-bold text-white 2xl:text-lg 3xl:text-xl"
                type="text"
                placeholder="Nome..."
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full outline-none pb-5 bg-primaryPink border-b-2 font-bold text-white 2xl:text-lg 3xl:text-xl"
                type="text"
                placeholder="Email..."
              />
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full outline-none pb-12 text- bg-primaryPink border-b-2 font-bold text-white 2xl:text-lg 3xl:text-xl"
                type="text"
                placeholder="Mensagem..."
              />
            </form>
            <div className="mt-16 lg:mt-4">
              <Button
                sendEmail={sendEmail}
                icon={FaPaperPlane}
                label="Enviar mensagem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
