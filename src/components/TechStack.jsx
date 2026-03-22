import React from "react";
import OrbitBanner from "./OrbitBanner";
import { Icon } from "@iconify/react";

const techHighlights = [
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Kubernetes", icon: "logos:kubernetes" },
  { name: "AWS", icon: "logos:aws" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
];

const TechStack = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-400">Tech Ecosystem</span>
          </h2>

          <p className="text-gray-400 mb-6 max-w-lg">
            Building scalable systems using modern technologies across
            full-stack, DevOps, and AI.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techHighlights.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition"
              >
                <Icon icon={tech.icon} width={20} />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
            Explore →
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <OrbitBanner />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
