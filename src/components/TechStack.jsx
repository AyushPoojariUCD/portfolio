import React from "react";
import { Icon } from "@iconify/react";

const techIcons = [
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "GraphQL", icon: "logos:graphql" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Redis", icon: "logos:redis" },
];

// Duplicate icons for seamless infinite loop
const duplicatedIcons = [...techIcons, ...techIcons];

const TechStack = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Technologies I Work With
        </h2>
        <p className="text-blue-400 text-sm">
          Modern tools for modern solutions
        </p>
      </div>

      {/* Smooth Infinite Scrolling Icons */}
      <div className="relative overflow-hidden mb-16">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {duplicatedIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform duration-600"
            >
              <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md">
                <Icon icon={tech.icon} width={32} height={32} />
              </div>
              <p className="mt-2 text-xs text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
