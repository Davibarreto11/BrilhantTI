import React from "react";

import { FaCog, FaCogs, FaLaptopCode } from "react-icons/fa";

const Service: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h2
            className="
            mt-12
            text-white
            text-3xl
            sm:text-3xl
            md:text-3xl
            lg:text-5xl
            xl:text-5xl
            2xl:text-5xl
            3xl:text-5xl
            4xl:text-6xl
            font-bold
            leading-tight"
          >
            Serviços
          </h2>
          <p className="w-full md:w-3/3 text-white mt-4 text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[38px]">
            Desenvolvimento inovador com design excepcional e gestão profissional.
          </p>
          <p className="md:w-3/3 text-white mt-2 text-[18.5px] md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[38px]">
            Transformamos ideias em realidade.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-2">
        <div className="w-full md:w-full lg:w-2/5 xl:w-1/2 2xl:w-2/5 4xl:w-2/5 mt-14">
          <div className="flex flex-col items-start justify-evenly bg-primaryPink rounded-xl p-5 lg:h-[200px] 2xl:h-[200px] 3xl:h-[220px] 4xl:h-[260px]">
            <div className="bg-secondaryPurple rounded-xl p-2">
              <FaLaptopCode color="white" size={40} />
            </div>
            <div>
              <h3 className="text-white font-bold 2xl:text-xl 3xl:text-xl 4xl:text-3xl mt-4 md:mt-10">
                Desenvolvimento Web
              </h3>
              <p className="text-white lg:text-[10px] xl:text-sm 2xl:text-base 3xl:text-base 4xl:text-xl">
                Construindo a sua presença digital, uma linha de código de cada
                vez.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-6">
            <div className="flex flex-col items-start justify-evenly bg-primaryPink rounded-xl md:mt-0 p-5 w-full md:w-[48%] lg:w-[48%] lg:h-[200px] xl:h-[220px] 3xl:h-[220px] xl:w-[48%] 4xl:h-[260px]">
              <div className="bg-secondaryPurple rounded-xl p-2">
                <FaCogs color="white" size={40} />
              </div>
              <div>
                <h3 className="text-white font-bold xl:text-base 2xl:text-xl  3xl:text-xl 4xl:text-3xl mt-4">
                  Gestão de sites
                </h3>
                <p className="text-white lg:text-[10px] xl:text-sm 2xl:text-base  3xl:text-base 4xl:text-xl">
                  Otimizando a sua presença online, passo a passo.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-evenly bg-primaryPink rounded-xl mt-6 md:mt-0 md:mb-0 mb-6 p-5 w-full md:w-[48%] lg:w-[48%] xl:w-[48%] lg:h-[200px] xl:h-[220px] 3xl:h-[220px] 4xl:h-[260px]">
              <div className="bg-secondaryPurple rounded-xl p-2">
                <FaCog color="white" size={40} />
              </div>
              <div>
                <h3 className="text-white font-bold xl:text-base 2xl:text-xl 3xl:text-xl 4xl:text-3xl mt-4">
                  Design feito para você
                </h3>
                <p className="text-white lg:text-[10px] xl:text-sm 2xl:text-base 3xl:text-base 4xl:text-xl">
                  Transformando ideias em experiências visuais extraordinárias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-first w-4/5 md:w-0 lg:w-3/6 xl:w-2/5 3xl:w-2/6 mb-4 md:mb-0">
          <img
            className="object-center w-full"
            src={require("../../assets/Programming-amico.png")}
            alt="Exams Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
