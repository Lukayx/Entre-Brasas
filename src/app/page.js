import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#us">Quienes somos</a>
          </li>
          <li>
            <a href="#main-dishes">Platos principales</a>
          </li>
          <li>
            <a href="#wines">Vinos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className={styles.page}>
        <header className={styles.header}>
          <Image
            src="/header.webp"
            className={styles.headerImage}
            width={1920} // Proporción base
            height={600} // Proporción base
            alt="Header image"
            priority
          />
          <h1>Entre Brasas</h1>
          <h2>Restaurante</h2>
          <button>Quienes somos</button>
        </header>
        <section className={styles.sectionUs}></section>
        <section className={styles.sectionMainDishes}></section>
        <section className={styles.sectionWines}></section>
        <section className={styles.sectionContact}></section>
        {/* <section className={styles.section}></section> */}
        <footer className={styles.footer}>
          <p>Entre Brasas</p>
          <p>Valdivia, Chile</p>
          <p>2021</p>
        </footer>
      </div>
    </>
  );
}
