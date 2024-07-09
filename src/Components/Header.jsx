import React from "react";
import logo from "../RealPage_Light.png";
const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          //   position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#EE7755",
          color: "white",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "80px", marginRight: "20px" }}
        />
      </div>
      <h1 className="flex justify-center mt-3" style={{ fontFamily: "lato", color: "white" }}>SRE Metrics</h1>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ background: "#0b1826", position: "" }}>
      <div>
        <Navbar />
      </div>
      <div
        className="flex justify-center"
        // style={{ marginTop: "4%", padding: "0px" }}
      ></div>
    </div>
  );
};

export default App;
