// import React from 'react'
import Link from "next/link";
import Styles from "./../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container "}>
        <div className={Styles.logo}>logo</div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
