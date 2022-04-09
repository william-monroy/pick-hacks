import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar__logo}>
        <img
          src="data:image/png;base64,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"
          alt="Pick Hacks"
        />
        <p className={styles.Logo__name}>Pick Hacks</p>
      </div>
      <div className={styles.Navbar__right}>
        <div className={styles.Navbar__profile}>
          <img
            src="https://avatars.githubusercontent.com/u/58092741?v=4"
            alt="Profile"
            className={styles.Navbar__profile__img}
          />
          <p className={styles.Navbar__profile__name}>William Monroy</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
