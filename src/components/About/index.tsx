import React from "react";

import ImageAbout from "../../assets/empresa.png";
import Button from "../Button";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center md:justify-between md:flex-row md:items-center">
      <div className="md:order-last md:w-4/5 3xl:w-2/6">
        <img
          className="object-center w-full"
          src={ImageAbout}
          alt="Exams Image"
        />
      </div>

      <div className="md:w-5xl 2xl:max-w-8xl 3xl:w-3/5 flex flex-col">
        <h1
          className="
            text-4xl
            md:text-4xl
            mb-2
            font-semibold
            text-white
            lg:text-5xl
            xl:text-5xl
            2xl:text-6xl
            3xl:text-7xl
            4xl:text-8xl"
        >
            Tenha seu site online rápido, e com melhor qualidade.
        </h1>
        <div className="mt-2 mb-4 2xl:mt-4 2xl:mb-4 3xl:mt-8 3xl:mb-10">
          <p className="font-light text-white text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[44px]">
            Especialidade em entrega e qualidade
          </p>
        </div>
        <div className="flex w-auto">
          <Button label="Conheça-nos" />
        </div>
      </div>
    </div>
  );
};

export default About;
