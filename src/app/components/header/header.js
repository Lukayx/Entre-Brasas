"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false); // Estado para el mensaje de "copiado"
  const [zIndex, setZIndex] = useState(-1); // Estado para el z-index del modal

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

    try {
      await navigator.clipboard.writeText(phoneNumber); // Copiar al portapapeles
      setCopied(true); // Mostrar el mensaje de copiado
      setTimeout(() => setCopied(false), 2000); // Ocultar el mensaje después de 2 segundos
    } catch (err) {
      console.error("Error al copiar el número: ", err);
    }
  };
  
  return (
    <header className={styles.header}>
        <Image
          src="/header1.webp"
          alt="Header image"
          width={2992}
          height={1683}
          priority
          className={styles.headerImage}
          sizes="(max-width: 500px) 500px, 100vw"
          srcSet="
            /header1.webp 500w, 
            /header2.webp 501w
          "
        />
      <div className={styles.headerContent}>
        <Image
          src="/headerTitle.png"
          className={styles.headerTitle}
          width={600} // Proporción base
          height={150} // Proporción base
          alt="Header title"
          loading="lazy"
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
