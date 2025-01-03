"use client";
import { useState } from "react";
import styles from "./mainDishes.module.css";

export default function MainDishes() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className={styles.mainDishes} id="main-dishes">
      <h1>Platos principales</h1>
      <div className={styles.dishesTitle}>
        <ul>
          <li onClick={() => setSelectedOption(0)}>Platos Principales</li>
          <li onClick={() => setSelectedOption(1)}>Carnes</li>
          <li onClick={() => setSelectedOption(2)}>Vinos</li>
          <li onClick={() => setSelectedOption(3)}>Postres</li>
        </ul>
      </div>


    </section>
  );
}