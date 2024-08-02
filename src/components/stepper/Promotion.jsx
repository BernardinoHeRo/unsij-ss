import React from 'react'
import inscero from "../../assets/inscero.png";

export const Promotion = () => {
    return (
        <div className="w-full md:w-1/3 mx-auto">
            <dl className="grid grid-cols-2 py-1">
                <div
                    className="flex items-center justify-center border-r border-gray-700">
                    <img src={inscero} alt="Inscripción cero" className="w-64"/>
                    {/*
                    <dt className="text-base font-normal leading-6 text-gray-300">
                        Inscripción
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-green-400">
                        <span>Cero</span>
                    </dd>
                    */}
                </div>
                <div
                    className="flex flex-col items-center justify-center border-l border-gray-700">
                    <dt className=" text-base xl:text-2xl font-amsi-pro font-normal leading-3 xl:leading-7 text-orange-900">
                        Costo de ficha
                    </dt>
                    <dd className=" text-3xl xl:text-4xl font-amsi-pro tracking-tight text-purple-700">
                        $<span>239.00</span>
                    </dd>
                </div>
            </dl>
        </div>
    )
}
export default Promotion



