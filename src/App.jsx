import Chatbot from "./Chatbot";
import "./app.css";
import logo from "./assets/gdglogo.png"
function App() {
  return (
    <>
      <div className="gdg-bg">
        <div className="blob-yellow"></div>
        <div className="blob-green"></div>
      </div>
      <div className="titles">
        <div className="title">
          <img src={logo} alt="" />
          <h1> Google Developer Groups</h1>
        </div>
        <div className="event-name">
          Google Cloud Workshop Chapter 1: Build AI Apps with Google Gemini and
          Firebase Workshop
        </div>
        <div className="location">
          GDG on Campus Sri Manakula Vinayagar Engineering College -
          Madagadipet, India
        </div>
      </div>

      {/* your original chatbot component */}
      <Chatbot />
    </>
  );
}

export default App;
