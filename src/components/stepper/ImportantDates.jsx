import React from "react";

const ImportantDates = () => {
  const importantDates = [
    {
      eventName: "Entrega de fichas",
      startDate: "2024-02-16",
      connector: "AL",
      endDate: "2024-06-26"
    },
    {
      eventName: "Examen de admisión",
      startDate: "2024-05-15",
      connector: "Y",
      endDate: "2024-07-01"
    },
    {
      eventName: "Inscripción al propedéutico",
      startDate: "2024-07-15",
      connector: "AL",
      endDate: "2024-07-26"
    },
    {
      eventName: "Duración del propedéutico",
      startDate: "2024-07-29",
      connector: "AL",
      endDate: "2024-09-20"
    }
  ];

  return (
    <>
      <div className="w-full pb-8">
        <h1 className="text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold pt-4 pb-8">
          Fechas importantes
        </h1>

        {importantDates.map((date, index) => (
          <div
            key={index}
            className="text-black flex flex-row items-center justify-between
            h-16 md:h-20 mx-auto w-[95%] md:w-[90%] lg:w-[50%] border-[1px] border-unsij-daintree-950 rounded-3xl
            shadow-lg shadow-unsij-black-500 relative mb-8 lg:mb-4"
          >
            <div className="absolute inset-y-0 left-0 right-0 flex items-center md:justify-center justify-end md:ml-16 lg:ml-32 mr-2">
              <span className="text-sm md:text-xl 2xl:text-2xl font-bold">
                {date.eventName}
              </span>
            </div>
            <div
              className="absolute -left-4 bg-unsij-daintree-800 rounded-full h-16 w-[156px]
            md:h-20 md:w-56 flex flex-row items-center justify-center
            border-r-4 border-unsij-black-950 text-unsij-black-50 font-bold"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl md:text-3xl 2xl:text-4xl font-bold">
                  {new Date(date.startDate).getDate()}
                </span>
                <span className="text-xs">
                  {new Date(date.startDate).toLocaleDateString("es", {
                    month: "long"
                  })}
                </span>
              </div>
              <span className="text-base mx-4">{date.connector}</span>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl md:text-3xl 2xl:text-4xl font-bold">
                  {new Date(date.endDate).getDate()}
                </span>
                <span className="text-xs">
                  {new Date(date.endDate).toLocaleDateString("es", {
                    month: "long"
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImportantDates;
