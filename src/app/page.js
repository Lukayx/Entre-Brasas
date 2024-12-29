import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>        
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.menuIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </li>
          <li>
            {/* <a href="#us">Quienes somos</a> */}
          </li>
          <li>
            {/* <a href="#main-dishes">Platos principales</a> */}
          </li>
          <li>
            {/* <a href="#wines">Vinos</a> */}
          </li>
          <li>
            {/* <a href="#contact">Contacto</a> */}
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
          <a onClick={() => location.hash = 'us'}>Quienes somos</a>
        </header>
        <section className={styles.sectionUs} id="us">
          <header>
            <div>
            
              <h1>Quienes somos</h1>
              <p>
                Somos un restaurante de comida chilena con una amplia variedad de
                platos y vinos. Nos caracterizamos por nuestra atención y calidad en
                los productos que ofrecemos.
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
