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

const techSkills = [
  {
    title: "Languages",
    items: ["Java", "Python", "R", "C", "C++", "C#", ".NET", "Golang", "Rust"],
  },
  {
    title: "Cloud & Microservices",
    items: ["Java Spring Boot", "AWS", "GCP", "Microsoft Azure"],
  },
  {
    title: "Data & BI Tools",
    items: ["Power BI", "Tableau", "Looker", "Databricks", "Snowflake"],
  },
  {
    title: "Machine Learning",
    items: ["TensorFlow", "Generative AI (Transformers, LLMs)", "Scikit-learn"],
  },
  {
    title: "DevOps & Big Data",
    items: ["Docker", "Kubernetes", "Apache Hadoop", "Apache Kafka"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Certifications",
    items: [
      "AWS Certified Solutions Architect",
      "GCP Associate Cloud Engineer",
      "Microsoft Azure Fundamentals",
    ],
  },
];

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

      {/* Scrolling icons */}
      <div className="overflow-hidden mb-16">
        <div className="flex gap-12 animate-marquee whitespace-nowrap px-4">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform duration-300"
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
