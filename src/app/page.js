import styles from "./page.module.css";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import SectionUs from "./components/sectionUs/sectionUs";
import MainDishes from "./components/mainDishes/mainDishes";
import Wines from "./components/wines/wines";
import Maps from "./components/maps/maps";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <Header />
        <SectionUs />
        <MainDishes />
        <Wines />
        <Maps />
        <footer className={styles.footer}>
          <div>
            <p>Entre Brasas</p>
            <p>Valdivia, Chile</p>
            <p>2021</p>
          </div>
          <p className={styles.footerCredits}>
            Diseñado por Fernando Inzulza | 
            <a
              href="https://www.linkedin.com/in/fernando-jose-inzulza-olavarr%C3%ADa-9a42362a0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "0.3rem", color: '#2bb6ff', textDecoration: 'underline' }}

            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
