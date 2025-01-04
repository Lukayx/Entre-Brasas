import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import MainDishes from "./mainDishes";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <header className={styles.header}>
          <Image
            src="/header.webp"
            className={styles.headerImage}
            fill
            alt="Header image"
            priority
          />
          <Image
            src="/headerTitle.png"
            className={styles.headerTitle}
            width={600} // Proporción base
            height={150} // Proporción base
            alt="Header title"
          />
          <h2>Restaurant</h2>
          <a href="#us">Quienes somos</a>
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
          {/* <Image
            src="/UsHeader.webp"
            className={styles.usImagee}
            width={1920} // Proporción base
            height={500} // Proporción base
            alt="Quienes somos"
          /> */}
        </section>
        <MainDishes />
        <section className={styles.sectionWines} id="wines"></section>
        <section className={styles.sectionContact} id="contact"></section>
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
