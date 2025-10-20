import { useState, useEffect } from "react";

export default function CambioFondo() {
  const [modo, setModo] = useState("claro");

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    if (modo === "claro") {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#222";
    } else {
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#f5f5f5";
    }
  }, [modo]);

  const cambiarModo = () => {
    setModo(modo === "claro" ? "oscuro" : "claro");
  };

  return (
    <button
      onClick={cambiarModo}
      style={{
        marginTop: "1rem",
        padding: "0.6rem 1.2rem",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        backgroundColor: modo === "claro" ? "#222" : "#f5f5f5",
        color: modo === "claro" ? "#f5f5f5" : "#222",
        transition: "all 0.3s ease",
        fontWeight: "bold",
      }}
    >
      Cambiar a {modo === "claro" ? "modo oscuro" : "modo claro"}
    </button>
  );
}
