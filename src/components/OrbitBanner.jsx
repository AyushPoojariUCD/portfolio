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
      {/* Orbit Ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/30 dark:border-blue-500/20"></div>

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
            {/* ICON BUBBLE (FIXED) */}
            <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-md flex items-center justify-center transition hover:scale-110 hover:shadow-blue-500/50">
              <img
                src={src}
                alt=""
                className="w-8 h-8 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
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
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100 dark:bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl"></div>

      {/* Center Image */}
      <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110">
        <img
          src="/orbit-profile-banner.png"
          alt="profile"
          className="w-[260px] md:w-[280px]"
        />
      </div>

      {/* Orbits */}
      <Orbit items={orbit1} radius={160} duration={18} />
      <Orbit items={orbit2} radius={240} duration={28} reverse />
      <Orbit items={orbit3} radius={320} duration={38} />
    </div>
  );
};

export default OrbitBanner;
