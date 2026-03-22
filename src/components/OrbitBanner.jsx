import React from "react";

/* =========================
   TECH STACK
========================= */

const orbit1 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/csharp/csharp-original.svg",
];

const orbit2 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/angularjs/angularjs-original.svg",
];

const orbit3 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/terraform/terraform-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/jenkins/jenkins-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/grafana/grafana-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/prometheus/prometheus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/azure/azure-original.svg",
];

/* =========================
   ORBIT COMPONENT
========================= */

const Orbit = ({ items, radius, duration, reverse }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: "translate(-50%, -50%)",
        animation: `${reverse ? "spin-reverse" : "spin"} ${duration}s linear infinite`,
      }}
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/30"></div>

      {items.map((src, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-md flex items-center justify-center hover:scale-110 transition">
              <img src={src} className="w-7 h-7 object-contain" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =========================
   MAIN BANNER
========================= */

const OrbitBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px] aspect-square">
      {/* Glow */}
      <div className="absolute w-full h-full rounded-full bg-blue-500/10 blur-3xl"></div>

      {/* Center Image */}
      <div className="relative z-10 hover:scale-110 transition duration-500">
        <img
          src="/orbit-profile-banner.png"
          className="w-[160px] sm:w-[200px] md:w-[240px]"
        />
      </div>

      {/* Orbits */}
      <Orbit items={orbit1} radius={90} duration={18} />
      <Orbit items={orbit2} radius={140} duration={28} reverse />
      <Orbit items={orbit3} radius={190} duration={38} />
    </div>
  );
};

export default OrbitBanner;
