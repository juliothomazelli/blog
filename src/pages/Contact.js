import * as React from "react";

const Photo10      = require("../assets/photo10.jpeg");
const Photo11      = require("../assets/photo11.jpeg");
const Photo12      = require("../assets/photo12.jpeg");

export default function Contact() {
  return (
    <div>
        
    </div>
  );

  function displayModal(display){
    if (display){
        document.getElementById("defaultModal").classList.remove("hidden");
    } else {
        document.getElementById("defaultModal").classList.add("hidden");
    }
  }
}
