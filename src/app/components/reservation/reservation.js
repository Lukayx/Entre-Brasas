'use client';

import { useState } from "react";
import styles from "./reservation.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Reservation() {
  const [open, setOpen] = useState(false);

  return(
    <div className={`${styles.reservation} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
      {/* <FontAwesomeIcon icon={!open ? faChevronLeft : faChevronRight} className={styles.iconRes} onClick={() => setOpen(!open)}/> */}
      <span className={styles.textRes}>RESERVAR</span>
      <div className={styles.content}>
        Datos reserva
      </div>
    </div>
  );
}