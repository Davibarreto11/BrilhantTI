import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <a
      href="mailto:gabrielferreira019@gmail.com"
      className="
      bg-primaryGray 
      px-4 
      py-2 
      md:px-6 
      md:py-3 
      2xl:px-8 
      2xl:py-4 
      3xl:py-5
      3xl:px-12
      4xl:px-14 
      4xl:py-7 
      text-base 
      md:text-lg 
      2xl:text-xl 
      3xl:text-2xl
      4xl:text-3xl 
      text-white
      rounded-3xl 
      font-semibold
      transition 
      ease-in-out 
      delay-15 
      hover:-translate-y-1 
      hover:scale-110
      duration-300
      "
    >
      <h1>{label}</h1>
    </a>
  );
};

export default Button;
