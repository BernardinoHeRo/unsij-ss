import React from "react";

const Course = () => {
  // Constantes para la latitud y longitud de la ubicación
  const LATITUD = 17.316099868582878;
  const LONGITUD = -96.48333327492362;

  return (
    <div className="pb-8">
      <h1 className="text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold">
        Examen de admisión
      </h1>
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">Inscripción</span>
          <div className="">
            <div className="w-80 rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
              <div className="block rounded-t overflow-hidden text-center">
                <div className="bg-unsij-daintree-900 text-white font-bold text-2xl py-1">
                  Julio 2024
                </div>
                <div className="pt-1 border-l border-r border-white bg-white">
                  <span className="text-7xl font-bold leading-tight">
                    15 - 26
                  </span>
                </div>
                <div
                  className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1
                flex flex-col gap-2 items-center pb-4"
                >
                  <span className="text-lg">8:00 am - 2:00 pm</span>
                  <span className="text-lg">4:00 pm - 7:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">Duración</span>
          <div className="">
            <div className="w-80 rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
              <div className="block rounded-t overflow-hidden text-center">
                <div className="bg-unsij-daintree-900 text-white font-bold text-2xl py-1">
                  Julio - Septiembre 2024
                </div>
                <div className="pt-1 border-l border-r border-white bg-white">
                  <span className="text-7xl font-bold leading-tight">
                    29 - 20
                  </span>
                </div>
                <div
                  className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1
                flex flex-col gap-2 items-center pb-4"
                >
                  <span className="text-lg">8:00 am - 2:00 pm</span>
                  <span className="text-lg">4:00 pm - 7:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row items-center justify-center">
        <a
          href={`https://www.google.com/maps?q=${LATITUD},${LONGITUD}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl underline text-blue-700"
        >
          Ubicación de la universidad
        </a>
      </div>

      <div className="mt-4 py-2 flex items-center justify-center bg-unsij-teak-400">
        <h1 className="text-xl text-center">
          <strong className="text-2xl pr-2">Nota!!!</strong>
          La inscripción y el curso se realizan de manera presencial en las
          instalaciones de la Universidad de la Sierra Juárez
        </h1>
      </div>
    </div>
  );
};

export default Course;
