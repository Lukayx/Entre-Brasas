import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <NavBar />
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
          {/* <h1>Entre Brasas</h1> */}
          <Image
            src="/headerTitle.png"
            className={styles.headerTitle}
            width={800} // Proporción base
            height={250} // Proporción base
            alt="Header title"
            priority
          />
          <h2>Restaurante</h2>
          <a href="#us">Quienes somos</a>
        </header>
        <section className={styles.sectionUs} id="us">
          <header>
            <div>
              <h1>Quienes somos</h1>
              <p>
                Somos un restaurante de comida chilena con una amplia variedad
                de platos y vinos. Nos caracterizamos por nuestra atención y
                calidad en los productos que ofrecemos.
              </p>
            </div>
            <Image
              src="/UsHeader.webp"
              className={styles.usImage}
              width={1920} // Proporción base
              height={500} // Proporción base
              alt="Quienes somos"
              priority
            />
          </header>
        </section>
        <section
          className={styles.sectionMainDishes}
          id="main-dishes"
        ></section>
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
