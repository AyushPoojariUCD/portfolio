import React, { useState, useEffect, useRef } from "react";

const API_URL = "https://portfolio-assistant-nvoc.onrender.com/api/chat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi 👋 I'm Ayush's AI Assistant. Ask me about projects, skills, experience, or collaboration!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const checkForContact = (text) => {
    const triggers = ["contact", "email", "resume", "cv", "hire"];
    const lower = text.toLowerCase();

    if (triggers.some((word) => lower.includes(word))) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "You can reach Ayush directly below 👇" },
        { type: "contact" },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const typingMsg = { type: "bot", text: "Thinking..." };
    setMessages((prev) => [...prev, typingMsg]);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const botReply =
        data.answer ||
        "I couldn't find that information. Feel free to ask about projects or experience!";

      setMessages((prev) =>
        prev.slice(0, -1).concat({
          type: "bot",
          text: botReply,
        }),
      );

      checkForContact(botReply);
    } catch {
      setMessages((prev) =>
        prev.slice(0, -1).concat({
          type: "bot",
          text: "Server seems busy. Please try again shortly.",
        }),
      );
    }
  };

  return (
    <>
      <button style={chatButtonStyle} onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div
          style={{
            ...chatBoxStyle,
            bottom: isMobile ? 0 : 95,
            right: isMobile ? 0 : 20,
            width: isMobile ? "100vw" : 360,
            height: isMobile ? "100vh" : 480,
            borderRadius: isMobile ? 0 : 16,
          }}
        >
          <div style={headerStyle}>
            <span>Ayush AI Assistant</span>
            <span onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
              ✕
            </span>
          </div>

          <div style={messagesStyle}>
            {messages.map((msg, i) => {
              if (msg.type === "contact") {
                return (
                  <div key={i} style={contactCardStyle}>
                    <a
                      href="mailto:ayushpoojari.dev@gmail.com"
                      style={emailBtnStyle}
                    >
                      ayush.poojari@ucdconnect.ie
                    </a>

                    <a
                      href="https://drive.google.com/uc?export=download&id=1FHqJmsLYLwJfE2QPLJCwDVo_k4L5iF-B"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={resumeBtnStyle}
                    >
                      Download Resume
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  style={{
                    ...messageStyle,
                    ...(msg.type === "user" ? userStyle : botStyle),
                  }}
                >
                  {msg.text}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          <div style={inputWrapper}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about projects, AI, experience..."
              style={inputStyle}
            />
            <button onClick={sendMessage} style={sendBtnStyle}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- STYLES ---------------- */

const chatButtonStyle = {
  position: "fixed",
  bottom: 20,
  right: 20,
  width: 60,
  height: 60,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  color: "#fff",
  fontSize: 24,
  border: "none",
  cursor: "pointer",
  zIndex: 999999,
  boxShadow: "0 8px 20px rgba(37,99,235,0.4)",
};

const chatBoxStyle = {
  position: "fixed",
  background: "#0f172a",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  zIndex: 999999,
  overflow: "hidden",
};

const headerStyle = {
  background: "linear-gradient(90deg, #2563eb, #1e40af)",
  color: "#fff",
  padding: 16,
  display: "flex",
  justifyContent: "space-between",
  fontWeight: 600,
};

const messagesStyle = {
  flex: 1,
  padding: 16,
  overflowY: "auto",
  background: "#0f172a",
};

const messageStyle = {
  marginBottom: 12,
  maxWidth: "85%",
  fontSize: 14,
  padding: 12,
  borderRadius: 14,
  lineHeight: 1.4,
};

const userStyle = {
  marginLeft: "auto",
  background: "#2563eb",
  color: "#fff",
};

const botStyle = {
  background: "#1e293b",
  color: "#e2e8f0",
};

const inputWrapper = {
  display: "flex",
  padding: 12,
  borderTop: "1px solid #1e293b",
  background: "#0f172a",
};

const inputStyle = {
  flex: 1,
  padding: 12,
  borderRadius: 10,
  border: "1px solid #334155",
  background: "#1e293b",
  color: "#fff",
  outline: "none",
};

const sendBtnStyle = {
  marginLeft: 8,
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "12px 16px",
  borderRadius: 10,
  cursor: "pointer",
};

const contactCardStyle = {
  background: "#1e293b",
  padding: 16,
  borderRadius: 14,
  marginBottom: 12,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const emailBtnStyle = {
  background: "#2563eb",
  color: "#fff",
  padding: 12,
  borderRadius: 10,
  textDecoration: "none",
  textAlign: "center",
  fontWeight: 500,
};

const resumeBtnStyle = {
  background: "#16a34a",
  color: "#fff",
  padding: 12,
  borderRadius: 10,
  textDecoration: "none",
  textAlign: "center",
  fontWeight: 500,
};
