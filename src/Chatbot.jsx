import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button onClick={() => setOpen(true)} style={styles.floatingBtn}>
          <BsChatDotsFill size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div style={styles.chatWrapper}>
          <div style={styles.header}>
            <h3 style={styles.gradientText}>AI Chatbot</h3>
            <IoMdClose
              size={22}
              onClick={() => setOpen(false)}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div style={styles.chatBox}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.msg,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  background:
                    msg.role === "user" ? "#4f6cff" : "rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && <p style={{ color: "#aaa" }}>Typing…</p>}
          </div>

          <div style={styles.inputBox}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
            />
            <button style={styles.sendBtn} >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

const styles = {
  floatingBtn: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#4f6cff",
    color: "white",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
  },

  chatWrapper: {
    position: "fixed",
    bottom: "30px",
    right: "20px",
    width: "400px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    background: "rgba(20, 20, 20, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    animation: "fadeIn 0.2s ease-in",
  },

  header: {
    background: "#1A1A1A",
    padding: "15px",
    color: "white",
    
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "4px solid transparent",
    borderImage: "linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58) 1",
  },

  chatBox: {
    flex: 1,
    padding: "12px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  msg: {
    maxWidth: "75%",
    padding: "10px 14px",
    borderRadius: "14px",
    fontSize: "14px",
    lineHeight: "1.4",
  },

  inputBox: {
    display: "flex",
    padding: "10px",
    gap: "8px",
    background: "rgba(255,255,255,0.08)",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
  },

  sendBtn: {
    background: "#4f6cff",
    border: "none",
    padding: "10px 12px",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },
  gradientText: {
    margin: 0,
    fontWeight: "700",
    background: "linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
};
