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
          <p>Entre Brasas</p>
          <p>Valdivia, Chile</p>
          <p>2021</p>
        </footer>
      </div>
    </>
  );
}
