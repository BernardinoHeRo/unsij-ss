import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {FaMapMarkerAlt} from 'react-icons/fa';

// Corrige el problema de los íconos predeterminados de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export const Location = () => {

    const position = [17.31820968412942, -96.4834039757116]; // Coordenadas de la Universidad de la Sierra Juárez (UNSIJ)
    const mapContainerStyle = {height: '40vh', width: '100%', zIndex: 0};

    const handleDirectionsClick = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
        window.open(url, '_blank');
    };

    return (
        <div id="location" className="max-w-7xl mx-auto max-h-[100vh] py-8 bg-unsij-green-950 px-8">
            <div className=" max-w-7xl ">
                <h1 className="text-neutral-50 font-bold text-3xl md:text-4xl 2xl:text-5xl text-center mb-4">
                    Nuestra Ubicación
                </h1>
                <div className="flex items-center justify-center mb-4">
                    <button
                        onClick={handleDirectionsClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Cómo llegar
                    </button>
                </div>
                <div className="flex items-center justify-center pb-4">
                    <MapContainer center={position} zoom={13} style={mapContainerStyle} className="rounded-3xl">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                <span className="text-base">Universidad de la Sierra Juárez (UNSIJ).</span>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Location;
