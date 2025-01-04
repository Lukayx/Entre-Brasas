"use client";
import { useState } from "react";
import styles from "./mainDishes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faDrumstickBite,
  faWineGlass,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";

export default function MainDishes() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className={styles.sectionMainDishes} id="main-dishes">
      <header className={styles.headerUs}>
        <h6>Disfrutemos juntos</h6>
        <h1>Platos principales</h1>
        <span>◆</span>
      </header>
      <div className={styles.dishesTitle}>
        <ul>
          <li
            className={selectedOption === 0 ? styles.selected : ""}
            onClick={() => setSelectedOption(0)}
          >
            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
            <span>Platos Principales</span>
          </li>
          <li
            className={selectedOption === 1 ? styles.selected : ""}
            onClick={() => setSelectedOption(1)}
          >
            <FontAwesomeIcon icon={faDrumstickBite} className={styles.icon} />
            <span>Carnes</span>
          </li>
          <li
            className={selectedOption === 2 ? styles.selected : ""}
            onClick={() => setSelectedOption(2)}
          >
            <FontAwesomeIcon icon={faWineGlass} className={styles.icon} />
            <span>Vinos</span>
          </li>
          <li
            className={selectedOption === 3 ? styles.selected : ""}
            onClick={() => setSelectedOption(3)}
          >
            <FontAwesomeIcon icon={faIceCream} className={styles.icon} />
            <span>Postres</span>
          </li>
        </ul>
      </div>
    </section>
  );
}