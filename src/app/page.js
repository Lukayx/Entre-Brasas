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
          <div>
            <h6>Disfrutemos juntos</h6>
            <h1>Quienes somos</h1>
            <p>
              Fundado en 2021, tras los desafíos de la pandemia, nuestro
              restaurante nació con la pasión de reunir a las personas en torno
              a la mesa, celebrando lo mejor de la gastronomía chilena.
              Especializados en carnes y comida típica, ofrecemos una
              experiencia culinaria única que combina tradición y creatividad.
            </p>
            <p>
              Para quienes buscan opciones vegetarianas, nuestra carta incluye
              platos cuidadosamente diseñados, además de una selección de vinos
              de excelencia y tragos de autor que deleitan los sentidos.
              Cerramos la experiencia con postres que capturan el alma de
              nuestra cocina. Aquí, cada detalle está pensado para ofrecer una
              experiencia auténtica y memorable que celebre la riqueza de
              nuestra tierra y su cultura gastronómica.
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
