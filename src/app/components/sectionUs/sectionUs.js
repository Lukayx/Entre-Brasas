import styles from "./sectionUs.module.css";
import Image from "next/image";

export default function SectionUs() {
  return (
    <section className={styles.sectionUs} id="us">
      <header className={styles.headerUs}>
        <span className={styles.slogan}>Disfrutemos juntos</span>
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
        width={1266} // Proporción base
        height={745} // Proporción base
        alt="Quienes somos"
        loading="lazy"
      />
    </section>
  );
}