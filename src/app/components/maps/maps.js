"use client";

import styles from "./maps.module.css";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Maps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Asegúrate de configurar esta variable de entorno
        version: "weekly",
      });

      // Importar la librería de mapas
      const { Map } = await loader.importLibrary("maps");

      // Definir posición inicial
      const position = {
        lat: -39.80961828572352,
        lng: -73.24472680187412,
      };

      // Opciones del mapa
      const mapOptions = {
        center: position,
        zoom: 18,
        mapId: "MY_MAP_ID", // Reemplaza con tu Map ID si lo usas
      };

      // Crear el mapa
      new Map(mapRef.current, mapOptions);
    };

    initMap();
  }, []);

  return (
    <section className={styles.sectionMaps} id="contact">
      <header className={styles.headerMaps}>
        <h6>Disfrutemos juntos</h6>
        <h1>Como Encontrarnos</h1>
        <span>◆</span>
      </header>
      <main>
        <div className={styles.info}>
          <h3>Valdivia</h3>
          <p>
            Visítanos en Carlos Andwanter 252 y disfruta de un ambiente acogedor,
            perfecto para compartir momentos especiales. Te esperamos con una
            experiencia culinaria y un servicio pensado para que vivas algo único.            
          </p>
          <span>¡Haz de tu próxima salida una ocasión memorable!</span>
        </div>
        <div className={styles.contactInfo}>
          <article>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <span>+56632280955</span>
          </article>
          <article>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            <span>Carlos Anwandter 252</span>
          </article>
        </div>
        <div
          ref={mapRef}
          style={{
            border: "1px solid #ccc",
          }}
          className={styles.map}
        ></div>
        <a
          href="https://maps.app.goo.gl/GkUY4sm5D95y9mtV9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: ".5rem", maxWidth: "1rem" }}/>
          Abrir en Google Maps
        </a>
      </main>
    </section>
  );
}
