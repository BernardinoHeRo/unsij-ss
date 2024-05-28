import React from 'react'

export const Promotion = () => {
    return (
        <div className="w-full md:w-1/3 mx-auto">
            <dl className="bg-gray-800 grid grid-cols-2 py-1">
                <div
                    className="flex flex-col border-r border-gray-700 text-center">
                    <dt className="text-base font-normal leading-6 text-gray-300">
                        Inscripción
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-green-400">
                        <span>Cero</span>
                    </dd>
                </div>
                <div
                    className="flex flex-col border-l border-gray-700 text-center">
                    <dt className="text-base font-normal leading-6 text-gray-300">
                        Costo de ficha
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-green-400">
                        $<span>239.00</span>
                    </dd>
                </div>
            </dl>
        </div>
    )
}
export default Promotion



