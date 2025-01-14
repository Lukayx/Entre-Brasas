"use client";

import { useState } from "react";
import styles from "./wines.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Vinos() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "/Vinos/vino1.webp", alt: "Vino 1" },
    { src: "/Vinos/vino2.webp", alt: "Vino 2" },
    { src: "/Vinos/vino3.jpg", alt: "Vino 3" },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.sectionWines} id="wines">
    <main>
      <header className={styles.headerWines}>
        <h6>Disfrutemos juntos</h6>
        <h1>Cata de vinos</h1>
        <span>◆</span>
      </header>
      <span className={styles.card}>
        <p>
          Explora una selección única de etiquetas chilenas cuidadosamente
          elegidas para realzar cada momento. Disfruta vinos de prestigiosas
          viñas como <b>Miguel Torres, Concha y Toro y Casa Silva,</b> seleccionados
          para acompañar a la perfección nuestros platillos.
        </p>
        <p>Cada copa está
          diseñada para resaltar sabores y texturas, creando un maridaje
          inolvidable que transforma cada comida en una experiencia única.
        </p>
        <p>
          <b>Descubre el arte del vino</b> y déjate llevar por la pasión que nos
          define.
        </p>
      </span>
    </main>
      <section className={styles.winesCarrousel}>
        <div className={styles.imgContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              className={`${styles.img} ${
                index === currentImage ? styles.active : styles.inactive
              }`}
              width={300}
              height={450}
              alt={image.alt}
            />
          ))}
        </div>
        <div className={styles.winesCarrouselButtons}>
          <button className={styles.buttonLeft} onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Anterior
          </button>
          <div>
            <span
              style={{
                "--current-image": `"${currentImage}"`, // Asegúrate de poner las comillas si es texto
              }}
            ></span>
          </div>
          <button className={styles.buttonRight} onClick={handleNext}>
            Siguiente
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
    </section>
  );
}
