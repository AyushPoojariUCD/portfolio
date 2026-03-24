import React, { useState } from "react";
import OrbitBanner from "./OrbitBanner";
import { Icon } from "@iconify/react";

const techCategories = [
  {
    category: "Languages",
    icon: "lucide:code-2",
    items: [
      { name: "C", icon: "logos:c" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "C#", icon: "logos:c-sharp" },
      { name: "Java", icon: "logos:java" },
      { name: "Python", icon: "logos:python" },
      { name: "", icon: "logos:typescript" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "lucide:cloud",
    items: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Azure", icon: "logos:microsoft-azure" },
      { name: "GCP", icon: "logos:google-cloud" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Github", icon: "logos:github" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "Terraform", icon: "logos:terraform-icon" },
      { name: "Ansible", icon: "logos:ansible" },
    ],
  },
  {
    category: "Databases",
    icon: "lucide:database",
    items: [
      { name: "MySQL", icon: "logos:mysql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Grafana", icon: "logos:grafana" },
      { name: "Prometheus", icon: "logos:prometheus" },
      { name: "Snowflake", icon: "logos:snowflake-icon" },
      { name: "Klipfolio", icon: "simple-icons:klipfolio" },
    ],
  },
  {
    category: "Lakehouse",
    icon: "lucide:layers",
    items: [
      { name: "Databricks", icon: "simple-icons:databricks" },
      { name: "dbt", icon: "simple-icons:dbt" },
      { name: "Apache Airflow", icon: "logos:airflow-icon" },
      { name: "Apache Spark", icon: "logos:apache-spark" },
      { name: "Hadoop", icon: "logos:hadoop" },
    ],
  },
  {
    category: "AI & ML",
    icon: "lucide:brain",
    items: [
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "Claude", icon: "logos:claude-icon" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "OpenCV", icon: "logos:opencv" },
      { name: "Hugging Face", icon: "noto:hugging-face" },
      { name: "Pandas", icon: "simple-icons:pandas" },
      { name: "NumPy", icon: "logos:numpy" },
    ],
  },
  {
    category: "Big Data",
    icon: "lucide:zap",
    items: [
      { name: "Hadoop", icon: "logos:hadoop" },
      { name: "Apache Spark", icon: "logos:apache-spark" },
      { name: "Apache Kafka", icon: "logos:apache-kafka" },
      { name: "RabbitMQ", icon: "logos:rabbitmq-icon" },
      { name: "Apache Airflow", icon: "logos:airflow-icon" },
    ],
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="text-center md:text-left">
          {/* Tagline */}
          <p className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-3">
            Software Engineer • AI • DevOps
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            My Technical <span className="text-blue-400">Arsenal</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-5 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            I craft high-performance systems at the intersection of{" "}
            <span className="text-blue-400">software engineering</span> and{" "}
            <span className="text-blue-400">AI</span> — from{" "}
            <span className="text-blue-400">pixel-perfect frontends</span> to{" "}
            <span className="text-blue-400">distributed backends</span> and{" "}
            <span className="text-blue-400">automated DevOps pipelines</span>.
            My data stack includes{" "}
            <span className="text-blue-400">Databricks</span>,{" "}
            <span className="text-blue-400">Snowflake</span>, and modern{" "}
            <span className="text-blue-400">database technologies</span>.
          </p>

          {/* Achievement */}
          <p className="text-gray-500 mb-8 text-sm">
            Built systems for{" "}
            <span className="text-white font-semibold">10K+ users</span> with up
            to{" "}
            <span className="text-white font-semibold">
              15× performance gains
            </span>
            .
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
            {techCategories.map((group, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all backdrop-blur-md border ${
                  activeTab === i
                    ? "bg-blue-500/90 border-blue-400 text-white shadow-md"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon icon={group.icon} />
                {group.category}
              </button>
            ))}
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 min-h-[110px] justify-center md:justify-start">
            {techCategories[activeTab].items.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl hover:bg-white/10 hover:scale-[1.05] transition-all text-sm backdrop-blur-md"
              >
                <Icon icon={tech.icon} className="text-lg" />
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[300px] sm:max-w-[420px] md:max-w-[550px]">
            <OrbitBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
