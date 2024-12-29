"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faWineGlass,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./navBar.module.css";

export default function InteractiveDiv() {
  const handleClick = () => {
    console.log("Menu");
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faBars} className={styles.iconNav} />
          <span>Menu</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className={styles.iconNav} />
          <span>Nosotros</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUtensils} className={styles.iconNav} />
          <span>Platos principales</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faWineGlass} className={styles.iconNav} />
          <span>Vinos</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconNav} />
          <span>Contacto</span>
        </li>
      </ul>
    </nav>
  );
}
