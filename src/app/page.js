import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navBar/navBar";
import MainDishes from "./components/mainDishes/mainDishes";
import Wines from "./components/wines/wines";
import Maps from "./components/maps/maps";
import Reservation from "./components/reservation/reservation";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <Reservation />
        <header className={styles.header}>
          <Image
            src="/header.webp"
            className={styles.headerImagePC}
            width={2992}
            height={1683}
            alt="Header image"
            priority
          />
          <Image
            src="/header.jpg"
            className={styles.headerImageMobile}
            width={1170}
            height={1466}
            alt="Header image"
            priority
          />
          <div className={styles.headerContent}>
            <Image
              src="/headerTitle.png"
              className={styles.headerTitle}
              width={600} // Proporción base
              height={150} // Proporción base
              alt="Header title"
            />
            <h2>Restaurant</h2>
            <a href="#us">Quienes somos</a>
          </div>
        </header>
        <section className={styles.sectionUs} id="us">
          <header className={styles.headerUs}>
            <h6>Disfrutemos juntos</h6>
            <h1>Quienes somos</h1>
            <span>◆</span>
          </header>
          <span className={styles.card} id={styles.c1}>
            Fundado en 2021, nuestro restaurante nació con la misión de unir a
            las personas en torno a la mesa, celebrando lo mejor de la
            gastronomía chilena.
          </span>
          <span className={styles.card} id={styles.c2}>
            Especializados en carnes y platos típicos, ofrecemos una
            experiencia única que combina tradición con creatividad.
          </span>
          <span className={styles.card} id={styles.c3}>
            Para quienes buscan opciones vegetarianas, nuestra carta incluye
            platos cuidadosamente diseñados, vinos de excelencia y postres que
            capturan el alma de nuestra cocina.
          </span>
          <Image
            src="/UsHeader.webp"
            className={styles.usImage}
            width={1920} // Proporción base
            height={500} // Proporción base
            alt="Quienes somos"
          />
        </section>
        <MainDishes />
        <Wines />
        <Maps />
        <footer className={styles.footer}>
          <p>Entre Brasas</p>
          <p>Valdivia, Chile</p>
          <p>2021</p>
        </footer>
      </div>
    </>
  );
}
