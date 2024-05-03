import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import utm from "./../assets/suneo/utm.png";
import uncos from "./../assets/suneo/uncos.png";
import unicha from "./../assets/suneo/unicha.png";
import unistmo from "./../assets/suneo/unitsmo.png";
import unpa from "./../assets/suneo/unpa.png";
import unsij from "./../assets/suneo/unsij.png";
import unsis from "./../assets/suneo/unsis.png";
import nova from "./../assets/suneo/nova.png";
import umar from "./../assets/suneo/umar.png";
import unca from "./../assets/suneo/unca.png";

export const Footer = () => {
  // Coordenadas específicas
  const latitude = "17.316108360401497";
  const longitude = "-96.48332407272977";

  // URL de Google Maps con las coordenadas
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="flex flex-col items-center bg-zinc-50 text-unsij-black-950 text-center"
    >
      <div className="container px-6 pt-6">
        <div className="mb-6 grid grid-cols-5 md:grid-cols-10 gap-4 pb-4 border-b-4 ">
          <span className="col-span-5 md:col-span-10 text-xl md:text-2xl uppercase font-medium">
            Universidades hermanas
          </span>
          <a
            href="https://www.utm.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={utm}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">UTM</span>
          </a>

          <a
            href="https://www.umar.mx/web/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={umar}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">umar</span>
          </a>

          <a
            href="http://www.unistmo.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unistmo}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unistmo</span>
          </a>

          <a
            href="https://www.unpa.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unpa}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unpa</span>
          </a>

          <a
            href="https://www.unsis.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unsis}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unsis</span>
          </a>

          <a
            href="https://www.unsij.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unsij}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unsij</span>
          </a>

          <a
            href="https://www.unca.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unca}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unca</span>
          </a>

          <a
            href="https://www.novauniversitas.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={nova}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Nova Universitas</span>
          </a>

          <a
            href="https://www.uncos.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={uncos}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Uncos</span>
          </a>

          <a
            href="https://www.unicha.edu.mx/" // Enlace externo a la página de UTM
            type="button"
            className="uppercase text-unsij-black-950 text-sm flex flex-col items-center"
            data-twe-ripple-color="light"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Añadir atributos de seguridad
          >
            <img
              src={unicha}
              alt="logo utm"
              className="rounded-full w-16 lg:w-20"
            />
            <span className="font-medium">Unicha</span>
          </a>
        </div>

        <div className="mb-6">
          <p className="text-lg">
            La Universidad de la Sierra Juárez es un organismo público
            descentralizado del gobierno del Estado de Oaxaca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Ubicación</h5>

            <ul className="mb-0 list-none">
              <li>
                <span>Avenida universidad S/N, Ixtlán de Juárez, Oaxaca</span>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unsij-daintree-900 font-medium hover:text-unsij-daintree-950 hover:brightness-200 hover:saturate-200 hover:contrast-200"
                >
                  Ver en Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Contacto</h5>
            <ul className="mb-0 list-none">
              <li>
                <span>Teléfono: +52 (951) 553 63 62</span>
              </li>
              <li>
                <span>Teléfono: +52 (951) 553 63 65</span>
              </li>
              <li>
                <span>Teléfono: +52 (951) 553 63 70</span>
              </li>
              <li>
                <span>servescolares@unsij.edu.mx</span>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Horario de atención</h5>
            <ul className="mb-0 list-none">
              <li>
                <span>Lunes - Viernes: 8:00 am - 14:00 pm</span>
              </li>
              <li>
                <span>Lunes - Viernes: 16:00 pm - 19:00 pm</span>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Redes sociales</h5>
            <ul className="mb-0 list-none flex flex-row items-center justify-center gap-8">
              <li>
                <a
                  href="https://www.facebook.com/UNSIJ.SUNEO/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl text-blue-800" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.unsij.edu.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorldWww className="text-4xl text-unsij-daintree-900" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center">
        © {currentYear} Copyright:
        <span className="pl-2 font-semibold">CoffeeAndCode</span>
      </div>
    </footer>
  );
};
export default Footer;
