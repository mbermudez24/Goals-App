import React from "react";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";


function Header() {
    return (
        <header >
            <div >
                <LogoSVG />
                <a href="/">
                    Metas App
                </a>
            </div>
            <nav className="">
                <a href="/">Profile</a>
            </nav>
        </header>
    );
}

export default Header;
