"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faWineGlass,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./navBar.module.css";
import { useState } from "react";

export default function InteractiveDiv() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const handleNavigation = (id) => {
    router.push(`#${id}`);
  };

  return (
    <nav className={`${styles.nav} ${collapsed ? styles.collapsed : ""}`}>
      <ul className={styles.navLinks}>
        <li onClick={() => setCollapsed(!collapsed)} className={styles.navLink}>
          <FontAwesomeIcon
            icon={collapsed ? faBars : faXmark}
            className={styles.iconNav}
          />
          <span>Menu</span>
        </li>
        <li onClick={() => handleNavigation("us")} className={styles.navLink}>
          <FontAwesomeIcon icon={faUser} className={styles.iconNav} />
          <span>Nosotros</span>
        </li>
        <li
          onClick={() => handleNavigation("main-dishes")}
          className={styles.navLink}
        >
          <FontAwesomeIcon icon={faUtensils} className={styles.iconNav} />
          <span>Platos principales</span>
        </li>
        <li
          onClick={() => handleNavigation("wines")}
          className={styles.navLink}
        >
          <FontAwesomeIcon icon={faWineGlass} className={styles.iconNav} />
          <span>Vinos</span>
        </li>
        <li
          onClick={() => handleNavigation("contact")}
          className={styles.navLink}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconNav} />
          <span>Contacto</span>
        </li>
      </ul>
      <div className={styles.schedule}>
        <div>
          <b>Lun a Sáb</b>
          <p>13:00 hrs</p>
          <p>23:00 hrs</p>
        </div>
        <div>
          <b>Dom</b>
          <p>12:30 hrs</p>
          <p>16:30 hrs</p>
        </div>
      </div>
      <ul className={styles.socialMedia}>
        <li>
          <a
            href="https://www.facebook.com/EntreBrasasRestaurantValdivia/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.iconNav} />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/entrebrasas_restaurant/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.iconNav} />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
