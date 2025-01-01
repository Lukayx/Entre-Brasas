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
            <div>
              <h6>Disfrutemos juntos</h6>
              <h1>Quienes somos</h1>
              <p>
                Somos un restaurante de comida chilena con una amplia variedad
                de platos y vinos. Nos caracterizamos por nuestra atención y
                calidad en los productos que ofrecemos. Somos un restaurante de comida chilena con una amplia variedad
                de platos y vinos. Nos caracterizamos por nuestra atención y
                calidad en los productos que ofrecemos.
              </p>
              {/* <p>
                Somos un restaurante de comida chilena con una amplia variedad
                de platos y vinos. Nos caracterizamos por nuestra atención y
                calidad en los productos que ofrecemos.
              </p> */}
            </div>
            <Image
              src="/UsHeader.webp"
              className={styles.usImage}
              width={1920} // Proporción base
              height={500} // Proporción base
              alt="Quienes somos"
            />
            <Image
              src="/UsHeader.webp"
              className={styles.usImagee}
              width={1920} // Proporción base
              height={500} // Proporción base
              alt="Quienes somos"
            />
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
