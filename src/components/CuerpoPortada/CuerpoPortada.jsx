import React from "react";
import Items from "../Items/Items";
import Image from "../../Image/Nirvana.jpg";
import Span from "../Span/Span";
import TituloSecundario from "../TituloSecundario/TituloSecundario";
import TituloPrincipal from "../Titulo/Titulo";
import "./CuerpoPortada.css";
import Parrafo from "../Parrafo/Parrafo";

export default function CuerpoPortada() {
  const fondoStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Cambiado a "flex-start" para que ItemsDerecha esté arriba
    alignItems: "center", // Ajustado para centrar horizontalmente
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "0px",
  };

  const tituloStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "2em",
    margin: "2px 0 2px 0", // Ajustado el margen superior del título
  };

  return (
    <>
      <div className="Body">
        <div style={fondoStyle}>
          <div className="ItemsDerecha">
            <Items ContenidoItem="EVANECENCE" />
            <Items ContenidoItem="GEORGE HARRISON" />
            <Items ContenidoItem="TRUE BLOOD" />
            <Items ContenidoItem="THE JEZABELS" />
          </div>
          <div style={tituloStyle}>
            <TituloPrincipal Titulo="Rolling" />
          </div>
          <div className="ItemsIzquierda">
            <Span className="spanYearOn" Span="20 YEARS ON" />
            <TituloSecundario titulo="Nirvana" />
            <Parrafo
              Parrafo="THE STORY OF NERVERMIND
                                INSIDE THEIR LEGENDARY 
                                AUSSIE TOUR"
            />
          </div>
        </div>
      </div>
    </>
  );
}
