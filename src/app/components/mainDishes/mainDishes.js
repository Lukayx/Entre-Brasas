"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./mainDishes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faIceCream,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";

// ...existing code...
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
            <span>Platos y Carnes</span>
          </li>
          <li
            className={selectedOption === 1 ? styles.selected : ""}
            onClick={() => setSelectedOption(1)}
          >
            <FontAwesomeIcon icon={faCarrot} className={styles.icon} />
            <span>Guarniciones</span>
          </li>
          <li
            className={selectedOption === 2 ? styles.selected : ""}
            onClick={() => setSelectedOption(2)}
          >
            <FontAwesomeIcon icon={faIceCream} className={styles.icon} />
            <span>Postres</span>
          </li>
        </ul>
      </div>

      {/* Div para Platos y Carnes */}
      {selectedOption === 0 && (
        <section className={styles.dishes}>
          <div className={styles.dishesImageDiv}>
            <Image
              src="/Platos/PP1.webp"
              className={styles.img}
              width={200}
              height={300}
              alt="Plato 1"
            />
            <Image
              src="/Platos/PP2.webp"
              className={styles.img}
              width={200}
              height={300}
              alt="Plato 2"
            />
            <Image
              src="/Platos/PP3.webp"
              className={styles.img}
              width={200}
              height={300}
              alt="Plato 3"
            />
          </div>
          {/* <div className={styles.line}>
            <span></span>
          </div> */}
          <div className={styles.dishesTextDiv}>
            <span className={styles.spanCard}>
              En nuestro restaurante ofrecemos una experiencia gastronómica
              única.
            </span>
            <span className={styles.spanCard}>
              Especialidades en carnes a las brasas, pescados y platos
              vegetarianos.
            </span>
            <span className={styles.spanCard}>
              Honramos la cocina chilena con recetas tradicionales.
            </span>
          </div>
        </section>
      )}

      {/* Div para Guarniciones */}
      {selectedOption === 1 && (
        <section className={styles.fittings}>
          <Image
            src="/Platos/Guarn1.webp"
            className={styles.img}
            width={200}
            height={300}
            alt="Guarnición 1"
          />
          <span className={styles.spanCard}>
            Ofrecemos guarniciones únicas como variedades de risottos, cremoso
            de choclo y espinaca, verduras salteadas y mas acompañamientos
            perfectos para complementar cada plato.
          </span>
          <Image
            src="/Platos/Guarn2.webp"
            className={styles.img}
            width={450}
            height={300}
            alt="Guarnición 2"
          />
        </section>
      )}

      {/* section para Postres */}
      {selectedOption === 2 && (
        <section className={styles.desserts}>
          <Image
            src="/Platos/pos1.webp"
            className={styles.img}
            width={200}
            height={300}
            alt="Postre 1"
          />
          <span className={styles.spanCard}>
            Endulza tu experiencia con nuestros irresistibles postres. Disfruta
            del clásico tiramisú, el volcán de chocolate con helado, el cremoso
            brownie con helado, o la delicadeza de nuestro crème brûlée.
            Opciones perfectas para cerrar tu comida con un toque de dulzura.
          </span>
          <Image
            src="/Platos/pos2.jpg"
            className={styles.img}
            width={200}
            height={300}
            alt="Postre 2"
          />
        </section>
      )}
    </section>
  );
}
