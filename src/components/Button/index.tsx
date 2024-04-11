import React from "react";
import { IconBaseProps } from "react-icons";

interface ButtonProps {
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  sendEmail?: (e: any) => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  sendEmail,
  href,
}) => {
  return (
    <a  href={href}>
      <button
        onClick={sendEmail}
        className="
      flex
      items-center
      bg-primaryGray 
      px-4 py-2 
      md:px-6 
      md:py-3 
      2xl:px-8 
      2xl:py-4 
      3xl:py-5
      3xl:px-12
      4xl:px-12
      4xl:py-6
      text-base 
      md:text-lg 
      2xl:text-xl 
      3xl:text-2xl
      4xl:text-2xl 
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
        {Icon && <Icon size={30} className="mr-4" />}
        <h1>{label}</h1>
      </button>
    </a>
  );
};

export default Button;
