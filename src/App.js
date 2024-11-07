import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (cls === "light") {
      setMode("light");
      document.getElementById("navbarBrand").style.color = "green";
      showAlert(" Light mode enabled", "success");
    } else if (cls === "dark") {
      setMode("dark");
      showAlert(" Dark mode enabled", "success");
    } else if (cls === "primary") {
      setMode("primary");
      document.getElementById("navbarBrand").style.color = "white";
      showAlert(" Blue mode enabled", "success");
    } else if (cls === "success") {
      setMode("success");
      document.getElementById("navbarBrand").style.color = "white";
      showAlert(" Green mode enabled", "success");
    } else if (cls === "warning") {
      setMode("warning");
      document.getElementById("navbarBrand").style.color = "white";
      showAlert(" Yellow mode enabled", "success");
    } else if (cls === "danger") {
      setMode("danger");
      document.getElementById("navbarBrand").style.color = "white";
      showAlert(" Red mode enabled", "success");
    } else if (cls === "info") {
      setMode("info");
      document.getElementById("navbarBrand").style.color = "white";
      showAlert(" Aqua mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About Us"
      />
      <Alert alert={alert} />{" "}
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text in the box below to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
