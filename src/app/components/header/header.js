"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import ExportedImage from "next-image-export-optimizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone } from "@fortawesome/free-solid-svg-icons";
import portraitMobile from "../../../../public/header1.webp";
import portraitPc from "../../../../public/UsHeader.webp";
// import portraitPc from "../../../../public/header2.webp";
import title from "../../../../public/headerTitle.png";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false); // Estado para el mensaje de "copiado"
  const [zIndex, setZIndex] = useState(-1); // Estado para el z-index del modal
  const isMobile = useMediaQuery("(max-width: 500px)");

  const openModal = () => {
    setZIndex(3); // Establecer z-index alto al abrir
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Cambiar z-index después de la animación
    setTimeout(() => {
      setZIndex(-1); // Restablecer z-index después de la animación
    }, 300); // Debe coincidir con la duración de la animación CSS
  };

  const copyToClipboard = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const phoneNumber = "+56632280955"; // Número de teléfono a copiar

    if (!navigator.clipboard) {
      alert("Tu navegador no soporta copiar al portapapeles automáticamente. Por favor, intenta manualmente.");
      return;
    }

    try {
      await navigator.clipboard.writeText(phoneNumber); // Copiar al portapapeles
      setCopied(true); // Mostrar el mensaje de copiado
      setTimeout(() => setCopied(false), 2000); // Ocultar el mensaje después de 2 segundos
    } catch (err) {
      alert("No se pudo copiar el número. Por favor, intenta manualmente.");
    }
  };

  return (
    <header className={styles.header}>
      <ExportedImage
        src={isMobile ? portraitMobile : portraitPc}
        // width={isMobile ? 500 : 1892}
        // height={isMobile ? 626 : 1064}
        alt="Header image"
        quality={100} // Calidad máxima
        fill
        sizes="100vw"
        priority
        className={styles.headerImage}
        style={{ objectFit: "cover", height: "600px", maxWidth: "100%" }} 
      />
      <div className={styles.headerContent}>
        <ExportedImage
          src={title}
          className={styles.headerTitle}
          width={600} // Proporción base
          height={150} // Proporción base
          alt="Header title"
          priority          
        />
        <h2>Restaurant</h2>
        <a href="#us" className={styles.usButton}>
          QUIENES SOMOS
        </a>
        <button className={styles.reserveButton} onClick={openModal}>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
          RESERVA
        </button>
      </div>

      <div
        className={`${styles.modalOverlay} ${isOpen ? styles.openOverlay : ""}`}
        onClick={closeModal}
        style={{ zIndex }}
      ></div>
      <div
        className={`${styles.modal} ${isOpen ? styles.openModal : ""}`}
        style={{ zIndex }}
      >
        <div className={styles.modalContent}>
          <h1> ¡Llama ahora y asegura tu reserva! </h1>
          <p>
            Disfruta de una experiencia gastronómica única con lo mejor de la
            cocina chilena
          </p>
          <a
            href="#"
            className={styles.reserveButton}
            onClick={copyToClipboard}
          >
            +56632280955
            <FontAwesomeIcon icon={faCopy} className={styles.copyIcon} />
          </a>
          {copied && (
            <div className={styles.tooltip}>Copiado al portapapeles!</div>
          )}
          <button className={styles.closeBtn} onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </div>
    </header>
  );
}
