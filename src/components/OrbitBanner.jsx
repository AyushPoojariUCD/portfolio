import React, { useEffect, useState } from "react";

/* =========================
   RESPONSIVE HOOK
========================= */

const useScreenSize = () => {
  const [size, setSize] = useState("lg");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setSize("sm");
      else if (window.innerWidth < 1024) setSize("md");
      else setSize("lg");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

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
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nextjs/nextjs-line.svg",
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

const Orbit = ({ items, radius, duration, reverse, iconSize }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
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
            <div className="bg-white border border-gray-200 rounded-full p-2 shadow-md flex items-center justify-center hover:scale-110 transition">
              <img
                src={src}
                alt="tech"
                className={`${iconSize} object-contain`}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/906/906324.png";
                }}
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
  const size = useScreenSize();

  // ✅ Responsive config
  const config = {
    sm: {
      r1: 70,
      r2: 110,
      r3: 150,
      icon: "w-5 h-5",
      img: "w-[120px]",
    },
    md: {
      r1: 100,
      r2: 150,
      r3: 200,
      icon: "w-6 h-6",
      img: "w-[180px]",
    },
    lg: {
      r1: 140,
      r2: 200,
      r3: 260,
      icon: "w-7 h-7",
      img: "w-[240px]",
    },
  };

  const { r1, r2, r3, icon, img } = config[size];

  return (
    <div className="relative flex items-center justify-center w-full max-w-[650px] aspect-square mx-auto overflow-visible">
      {/* Glow */}
      <div className="absolute w-full h-full rounded-full bg-blue-500/10 blur-3xl"></div>

      {/* Center Image */}
      <div className="relative z-10 hover:scale-110 transition duration-500">
        <img src="/orbit-profile-banner.png" alt="profile" className={img} />
      </div>

      {/* Orbits */}
      <Orbit items={orbit1} radius={r1} duration={18} iconSize={icon} />
      <Orbit items={orbit2} radius={r2} duration={28} reverse iconSize={icon} />
      <Orbit items={orbit3} radius={r3} duration={38} iconSize={icon} />
    </div>
  );
};

export default OrbitBanner;
