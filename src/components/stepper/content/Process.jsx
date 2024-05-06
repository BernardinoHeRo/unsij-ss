import React from "react";
import fichaEscolar from "../../../assets/pdf/fichaEscolar.pdf";

const Process = () => {
  const processData = {
    "presencial": {
      "title": "Presencial",
      "description": "Entregar toda la documentación en cualquiera de los siguientes lugares",
      "locations": [
        { "name": "Instalaciones de la UNSIJ", "address": "Av. Universidad S/N Ixtlán de Juárez, Oaxaca" },
        { "name": "Oficinas de Oaxaca", "address": "Pino Suárez 509, Col. Centro, Tel. (951) 132 69 58" },
        { "name": "Librería universitaria de la UNSIJ", "address": "Avenida 16 de septiembre s/n Planta baja de la biblioteca municipal Ixtlán de Juárez, Oaxaca" },
        { "name": "Universidades hermanas", "address": "UTM, UMAR, UNISTMO, UNPA, UNSIS, UNCA, NU, UNCOS, UNICHA" },
        { "name": "Oficinas en la Ciudad de México", "address": "Sacramento 347, Col. del Valle, C.P. 03100, México, D.F." }
      ]
    },
    "enLinea": {
      "title": "En línea",
      "description": "Escanear todos los documentos para adjuntarlos durante este proceso.",
      "requirements": [
        "Clave CURP del alumno",
        "Correo electrónico (debe ser personal y de uso frecuente).",
        "Generar una contraseña segura (8 caracteres como mínimo)."
      ],
      "links": [
        { "text": "Ingresar al sitio para realizar el registro", "url": "https://inscripciones.unsij.edu.mx/login" },
      ]
    }
  };
  
  return (
      <div className="w-[98%] text-black mx-auto pb-8">
        <h1 className="text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold pb-8">
          Trámite de ficha escolar
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.keys(processData).map((key) => {
            const data = processData[key];
            return (
                <div key={key} className="flex flex-col items-center justify-center p-4 border-2 shadow-md rounded-sm">
                  <h1 className="text-center text-black text-lg md:text-xl 2xl:text-2xl font-bold pt-2 pb-4">{data.title}</h1>
                  <span className="pb-4 font-medium text-center">{data.description}</span>
                  <ul className="flex flex-col gap-2">
                    {key === "presencial" && (
                        data.locations.map((location, index) => (
                            <li key={index} className="flex flex-col items-center justify-center">
                              <strong>{location.name}</strong>
                              <p>{location.address}</p>
                            </li>
                        ))
                    )}
                    {key === "enLinea" && (
                        <>
                          <ul className="flex flex-col items-center bg-unsij-daintree-800 text-unsij-black-50 px-6 rounded-3xl shadow-lg shadow-unsij-black-500 gap-4 py-2">
                            <span className="text-center font-medium">Durante el registro se solicitarán los siguientes datos:</span>
                            {data.requirements.map((requirement, index) => (
                                <li key={index}>
                                  <p className="text-center">{requirement}</p>
                                </li>
                            ))}
                          </ul>
                          <ul className="mt-6 flex flex-col gap-4">
                            {data.links.map((link, index) => (
                                <li key={index}>
                                  <p className="text-center">
                                    {link.text}: <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-unsij-daintree-800 saturate-200">Aquí</a>
                                  </p>
                                </li>
                            ))}
                            <li>
                              <p className="text-center">
                                Manual de apoyo para realizar el trámite de ficha escolar:{" "}
                                <a href={fichaEscolar} target="_blank" rel="noopener noreferrer" className="text-unsij-daintree-800 saturate-200">Aquí</a>
                              </p>
                            </li>
                          </ul>
                        </>
                    )}
                  </ul>
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default Process;
