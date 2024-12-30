"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faWineGlass,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./navBar.module.css";

export default function InteractiveDiv() {
  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`#${id}`);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li onClick={() => handleNavigation("us")} className={styles.navLink}>
          <FontAwesomeIcon icon={faBars} className={styles.iconNav} />
          <span>Menu</span>
        </li>
        <li onClick={() => handleNavigation("us")} className={styles.navLink}>
          <FontAwesomeIcon icon={faUser} className={styles.iconNav} />
            <span>Nosotros</span>
        </li>
        <li onClick={() => handleNavigation("main-dishes")} className={styles.navLink}>
          <FontAwesomeIcon icon={faUtensils} className={styles.iconNav} />
            <span>Platos principales</span>
        </li>
        <li onClick={() => handleNavigation("wines")} className={styles.navLink}>
          <FontAwesomeIcon icon={faWineGlass} className={styles.iconNav} />
            <span>Vinos</span>
        </li>
        <li onClick={() => handleNavigation("contact")} className={styles.navLink}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconNav} />
            <span>Contacto</span>
        </li>
      </ul>
      <div className={styles.schedule}>
        <b>Lun a Sáb</b>
        <p>13:00 hrs</p>  
        <p>23:00 hrs</p>
        <b>Dom</b>
        <p>12:30 hrs</p>
        <p>16:30 hrs</p>
      </div>
      <ul className={styles.socialMedia}>
        <li onClick={() => window.location.href="https://www.facebook.com/EntreBrasasRestaurantValdivia/?locale=es_LA"}>
          <FontAwesomeIcon icon={faFacebook} className={styles.iconNav} />
        </li>
        <li onClick={() => window.location.href="https://www.instagram.com/entrebrasas_restaurant/?hl=es"}>
          <FontAwesomeIcon icon={faInstagram} className={styles.iconNav} />
        </li>
      </ul>
    </nav>
  );
}