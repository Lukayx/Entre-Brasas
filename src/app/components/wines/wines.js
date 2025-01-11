'use client';

import { useState } from "react";
import styles from "./wines.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
      <header className={styles.headerWines}>
        <h6>Disfrutemos juntos</h6>
        <h1>Cata de vinos</h1>
        <span>◆</span>
      </header>
      <section className={styles.winesCarrousel}>
        <div className={styles.imgContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              className={`${styles.img} ${index === currentImage ? styles.active : styles.inactive}`}
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
            <span style={{
              "--current-image": `"${currentImage}"`, // Asegúrate de poner las comillas si es texto
            }}></span>
          </div>
          <button className={styles.buttonRight} onClick={handleNext}>
            Siguiente
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
      <span className={styles.card}>
        Nuestra carta de vinos ha sido cuidadosamente seleccionada para ofrecer
        etiquetas de prestigiosas viñas chilenas como Miguel Torres, Concha y
        Toro, Casa Silva, entre otras.
        Cada vino ha sido elegido pensando en
        realzar los sabores de nuestros platos, brindándote el maridaje perfecto
        para disfrutar de una experiencia gastronómica completa.
      </span>
    </section>
  );
}