import React from "react";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as ProfileSVG } from "../../img/profile.svg";
import './Header.css';

function Header() {
    return (
        <div className="header" >
            <div className="flex items-center pl-4 " >
                <LogoSVG className="logo" />
                <a href="/">
                    Goals App
                </a>
            </div>
            <nav className="">
                <a href="/profile" className="link">
                    <ProfileSVG className="profilepic" />
                </a>
            </nav>
        </div>
    );
}

export default Header;
