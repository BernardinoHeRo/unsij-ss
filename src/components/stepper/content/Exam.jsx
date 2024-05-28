import React from "react";

const Exam = () => {
  const fechas = [
    {
      month: "Mayo",
      year: 2024,
      day: 25,
      dayOfWeek: "Sábado",
      time: "Inicio: 8:00 am"
    },
    {
      month: "Julio",
      year: 2024,
      day: 1,
      dayOfWeek: "Lunes",
      time: "Inicio: 10:00 am"
    }
  ];

  return (
    <div className="pb-8">
      <h1 className="text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold">
        Examen de ingreso
      </h1>
      <div className="mt-2 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
          {fechas.map((fecha, index) => (
            <div key={index} className="col-span-1">
              <div className="w-80 rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
                <div className="block rounded-t overflow-hidden text-center">
                  <div className="bg-unsij-daintree-900 text-white font-bold text-2xl py-1">
                    {fecha.month} {fecha.year}
                  </div>
                  <div className="pt-1 border-l border-r border-white bg-white">
                    <span className="text-7xl font-bold leading-tight">
                      {fecha.day}
                    </span>
                  </div>
                  <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                    <span className="text-lg">{fecha.dayOfWeek}</span>
                  </div>
                  <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                    <span className="text-xs leading-normal">{fecha.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
            className="mt-2 py-2 px-16 col-span-5 flex items-center justify-center bg-unsij-teak-400">
          <h1 className="text-xl text-center">
            <strong className="text-2xl pr-2">¡¡Nota!!</strong>
            La fecha y hora se asignan el día del tramite de ficha escolar.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Exam;
