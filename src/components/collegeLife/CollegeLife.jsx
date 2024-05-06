import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Captions, Download, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images.jsx";
import images from "./AllImages.js";

const CollegeLife = () => {
    const navbarHeight = window.innerHeight * 0.08;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    const [index, setIndex] = useState(-1);
    const [selectedLicenciatura, setSelectedLicenciatura] = useState("ids");

    const handleChange = event => {
        setSelectedLicenciatura(event.target.value);
        setIndex(-1); // Resetear el índice del Lightbox al cambiar la licenciatura seleccionada
    };

    return (
        <>
            <div id="college" className="bg-unsij-black-100 w-full" style={{minHeight}} >
                <div
                    className="w-full flex flex-col items-center justify-center bg-unsij-black-50 "
                >
                    <h1 className="mt-8 text-black font-bold text-3xl md:text-4xl 2xl:text-5xl">
                        Vida universitaria
                    </h1>
                    <div className="w-full flex items-center justify-center pb-4 lg:pt-2 lg:pb-2">
                        <select
                            value={selectedLicenciatura}
                            onChange={handleChange}
                            className="bg-unsij-daintree-700 py-2 px-8 rounded-sm
                            text-sm md:text-base text-unsij-black-50 font-bold"
                        >
                            <option value="ids">Ingeniería en desarrollo de software</option>
                            <option value="lat">
                                Licenciatura en administración turística
                            </option>
                            <option value="ifo">Ingeniería forestal</option>
                            <option value="lb">Licenciatura en Biología</option>
                            <option value="lca">Licenciatura en Ciencias Ambientales</option>
                        </select>
                    </div>
                </div>

                <div>
                    {selectedLicenciatura && (
                        <>
                            <Images
                                data={images[selectedLicenciatura]}
                                onClick={currentIndex => setIndex(currentIndex)}
                            />
                            <Lightbox
                                plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                                captions={{
                                    showToggle: true,
                                    descriptionTextAlign: "end"
                                }}
                                index={index}
                                slides={images[selectedLicenciatura]}
                                open={index >= 0}
                                close={() => setIndex(-1)}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default CollegeLife;
