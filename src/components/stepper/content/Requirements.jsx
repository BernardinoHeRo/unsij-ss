import React from "react";
import lineaDeCaptura from "../../../assets/pdf/lineaDeCaptura.pdf";
import actaNacimiento from "../../../assets/requerimientos/actaNacimiento.png";
import certSecundaria from "../../../assets/requerimientos/certificado.jpg";
import certBachi from "../../../assets/requerimientos/certificado.jpg";
import curp from "../../../assets/requerimientos/curp.png";
import fotos from "../../../assets/requerimientos/fotografias.png";

const Requirements = () => {
  const requirementsData = [
    {
      title: "Acta de nacimiento",
      requirements: ["Original y copia"],
      image: actaNacimiento
    },
    {
      title: "Certificado de secundaria",
      requirements: ["Original y copia"],
      image: certSecundaria
    },
    {
      title: "Certificado de bachillerato",
      requirements: [
        "Original y copia",
        "o",
        "Constancia de estudios con tira de materias de 1 al 5 semestre"
      ],
      image: certBachi
    },
    {
      title: "CURP",
      requirements: ["Original y copia"],
      image: curp
    },
    {
      title: "6 Fotografías B/N",
      requirements: ["Tamaño infantil", "Papel mate"],
      image: fotos
    }
  ];

  return (
    <>
      <div className="text-black w-full pb-8 grid md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
        <h1 className="col-span-5 text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold">
          Requisitos para entrega de fichas
        </h1>

        {requirementsData.map((requirement, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-start col-span-5 md:col-span-2 lg:col-span-1 border-2 shadow-lg"
          >
            <div className="flex items-center justify-center bg-unsij-daintree-800 min-h-[180px] max-h-[180px]">
              <img
                src={requirement.image}
                alt="acta de nacimiento"
                className="w-[100px]"
              />
            </div>
            <h1 className="text-center pt-2 text-lg md:text-xl font-medium">
              {requirement.title}
            </h1>
            <ul className="w-[80%] mx-auto flex flex-col items-center justify-center text-base md:text-lg">
              {requirement.requirements.map((item, idx) => (
                <li className="text-center" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-2 lg:mt-4 col-span-5 md:col-span-2 lg:col-span-3 lg:col-start-2">
          <div className="border-2 rounded-sm shadow-lg px-4 flex items-center justify-center flex-col pb-4">
            <span className="text-center pt-4 pb-2 text-lg md:text-xl font-medium px-4">
              Comprobante de pago de ficha
            </span>
            <ul className="mt-1 flex flex-col items-center justify-center text-center text-sm md:text-base lg:text-lg">
              <li>Original y copia</li>
              <li>
                Obtener orden de pago de ficha:{" "}
                <a
                  href="https://siox.finanzasoaxaca.gob.mx/pagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unsij-daintree-800 saturate-200"
                >
                  Aquí
                </a>
              </li>
              <li>
                Ver manual de pago de ficha:{" "}
                <a
                  href={lineaDeCaptura}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unsij-daintree-800 saturate-200"
                >
                  Aquí
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 py-2 col-span-5 lg:col-span-3 lg:col-start-2 flex items-center justify-center bg-unsij-teak-400">
          <h1 className="text-xl text-center">
            <strong className="text-2xl pr-2">¡¡Nota!!</strong>
            Todos los documentos deben ser escaneados en PDF para el trámite en línea.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Requirements;
