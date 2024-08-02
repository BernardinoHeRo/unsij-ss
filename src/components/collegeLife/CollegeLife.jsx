import React, {useState, useEffect} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Captions, Download, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import images from "./AllImages.js";

const CollegeLife = () => {
    const navbarHeight = window.innerHeight * 0.08;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    const [index, setIndex] = useState(-1);
    const [currentImages, setCurrentImages] = useState([]);
    const [randomImages, setRandomImages] = useState({});

    const albums = [
        {title: "Ingeniería en Desarrollo de Software y Sistemas Inteligentes", images: images["ids"]},
        {title: "Licenciatura en Administración Turística", images: images["lat"]},
        {title: "Ingeniería Forestal", images: images["ifo"]},
        {title: "Licenciatura en Biología", images: images["lb"]},
        {title: "Licenciatura en Ciencias Ambientales para el Desarrollo Comunitario", images: images["lca"]}
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const newRandomImages = {};
            albums.forEach(album => {
                const randomIndex = Math.floor(Math.random() * album.images.length);
                newRandomImages[album.title] = album.images[randomIndex];
            });
            setRandomImages(newRandomImages);
        }, 3000); // Cambiar la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    const handleAlbumClick = images => {
        setCurrentImages(images);
        setIndex(0); // Abrir la primera imagen del álbum
    };

    return (
        <>
            <div id="college" className="bg-white w-full py-4 md:py-8">
                <div className="w-full flex flex-col items-center justify-center bg-white">
                    <h1 className="text-unsij-green-950 font-bold text-3xl md:text-4xl 2xl:text-5xl mb-1 md:mb-4">
                        Vida Estudiantil
                    </h1>
                    <p className="text-unsij-green-950 text-sm md:text-xl 2xl:text-3xl font-normal mb-1 md:mb-2">
                        Álbumes de Universitarios
                    </p>
                </div>
                <div className="flex flex-wrap justify-center py-2 md:py-4 gap-2 2xl:gap-4">
                    {albums.map((album, index) => (
                        <div
                            key={index}
                            className="cursor-pointer rounded-lg overflow-hidden shadow-lg shadow-neutral-800 transform hover:scale-105 transition duration-300 max-w-[160px] min-w-[160px] md:max-w-[250px] md:min-w-[250px] 2xl:max-w-[400px] 2xl:min-w-[400px] min-h-[150px] bg-white mb-2"
                            onClick={() => handleAlbumClick(album.images)}
                        >
                            <img
                                src={randomImages[album.title]?.src || album.images[0].src}
                                alt={album.title}
                                className="w-full h-48 object-cover"
                            />
                            <h3 className="bg-white text-center py-4 px-2 2xl:px-6 text-xs font-normal 2xl:text-lg">{album.title}</h3>
                        </div>
                    ))}
                </div>

                {currentImages.length > 0 && (
                    <Lightbox
                        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                        captions={{
                            showToggle: true,
                            descriptionTextAlign: "end"
                        }}
                        index={index}
                        slides={currentImages}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                    />
                )}
            </div>
        </>
    );
};

export default CollegeLife;
