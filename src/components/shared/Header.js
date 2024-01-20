import React from "react";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as ProfileSVG } from "../../img/profile.svg";
import styles from './Header.module.css';
import Link from "./Link";

function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.container} >
                <LogoSVG className={styles.logo} />
                <a className={styles.title} href="/">
                    Goals App
                </a>
            </div>
            <nav className="">
                <Link
                    to="/profile"
                    Icon={ProfileSVG}
                />
            </nav>
        </header>
    );
}

export default Header;
