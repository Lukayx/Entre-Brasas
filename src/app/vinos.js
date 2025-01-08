import styles from "./vinos.module.css";

export default function Vinos() {

  return (
    <section className={styles.sectionWines} id="wines">
      <header className={styles.headerWines}>
        <h6>Disfrutemos juntos</h6>
        <h1>Cata de vinos</h1>
        <span>◆</span>
      </header>
    </section>
  ); 
}