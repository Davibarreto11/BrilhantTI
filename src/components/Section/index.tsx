import React from "react";

interface SectionProps {
  children: any;
  level: "about" | "technologies" | "services" | "contacts";
}

const Section: React.FC<SectionProps> = ({ children, level }) => {
  return (
    <div
      id={level}
      className={`flex justify-center ${
        level === "technologies" || level === "contacts" ? "bg-white" : ""
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="flex" style={{ width: "80%" }}>
        {children}
      </div>
    </div>
  );
};

export default Section;
