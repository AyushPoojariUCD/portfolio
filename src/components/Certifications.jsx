import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    id: 1,
    name: "AWS",
    icon: "logos:aws",
    certs: [
      {
        title: "Solutions Architect",
        image: "/certifications/aws-solution-architect.png",
      },
      {
        title: "Cloud Practitioner",
        image: "/certifications/aws-cloud-practitioner.png",
      },
    ],
  },
  // {
  //   id: 2,
  //   name: "Azure",
  //   icon: "logos:microsoft-azure",
  //   certs: [
  //     {
  //       title: "AZ-900",
  //       image: "/certifications/azure-az900.png",
  //     },
  //     {
  //       title: "AZ-104",
  //       image: "/certifications/azure-az104.png",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Terraform",
  //   icon: "logos:terraform-icon",
  //   certs: [
  //     {
  //       title: "Terraform Associate",
  //       image: "/certs/terraform.png",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "GitHub",
  //   icon: "logos:github-icon",
  //   certs: [
  //     {
  //       title: "GitHub Foundations",
  //       image: "/certs/github.png",
  //     },
  //   ],
  // },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[120px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* Heading */}
      <div className="text-center mb-24">
        <p className="text-sm tracking-[0.3em] text-blue-400 uppercase mb-3">
          My Certifications
        </p>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Explore my <span className="text-blue-400">Certifications</span>
        </h2>
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -6 }}
            className={`flex flex-col items-center cursor-pointer group px-2 py-1 rounded ${
              selected?.id === cert.id ? "bg-blue-500/20" : ""
            }`}
            onClick={() => setSelected(cert)}
          >
            {/* Folder */}
            <div className="relative w-24 h-20">
              {/* Shadow */}
              <div className="absolute inset-0 rounded-md bg-black/40 blur-md translate-y-1 scale-95"></div>

              {/* Folder body */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`relative w-full h-full rounded-md flex items-center justify-center
                border border-blue-400/30
                shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.4)]
                ${selected?.id === cert.id ? "bg-[#fbbf24]" : "bg-[#fcd34d]"}
                group-hover:border-blue-400/60
                group-hover:brightness-110
                transition`}
              >
                {/* Folder tab */}
                <div
                  className={`absolute -top-3 left-2 w-12 h-5 rounded-t-md 
                  border border-blue-400/30 shadow-sm
                  ${
                    selected?.id === cert.id ? "bg-[#fde68a]" : "bg-[#fef08a]"
                  }`}
                />

                {/* Icon */}
                <Icon
                  icon={cert.icon}
                  width={28}
                  className="drop-shadow-md group-hover:scale-110 transition"
                />

                {/* File count */}
                <span className="absolute bottom-1 right-1 text-[10px] bg-black/60 px-1 rounded">
                  {cert.certs.length}
                </span>
              </motion.div>
            </div>

            {/* Label */}
            <p className="mt-3 text-sm text-gray-300 group-hover:text-white transition text-center">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <div
                className="relative max-w-5xl w-full rounded-2xl overflow-hidden 
                bg-white/5 backdrop-blur-2xl 
                border border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
              >
                {/* Header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                  <span className="ml-4 text-sm text-gray-400">
                    {selected.name} Certifications
                  </span>
                </div>

                {/* Certificates */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
                  {selected.certs.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      className="group relative rounded-xl overflow-hidden 
                      bg-gradient-to-br from-white/5 to-white/10 
                      border border-white/10 backdrop-blur-lg"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-44 object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
                        <p className="text-sm font-semibold">{cert.title}</p>
                        <span className="text-xs text-gray-400">
                          View Certificate
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-end px-6 py-4 border-t border-white/10">
                  <button
                    onClick={() => setSelected(null)}
                    className="text-sm px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-md hover:opacity-90 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
