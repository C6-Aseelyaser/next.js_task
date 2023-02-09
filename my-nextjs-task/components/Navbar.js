// import React from 'react'
import Link from "next/link";
import Styles from "./../styles/Navbar.module.css";
const Navbar = ({ product }) => {
  console.log("navpro", product);
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container "}>
        <div className={Styles.logo}>logo</div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/womenClothes"> Women Clothes </Link>
          </li>
          <li>
            <Link href="/menClothes"> Men Clothes </Link>
          </li>
          <li>
            <Link href="/jewelery"> Jewelery  </Link>
          </li>
          <li>
            <Link href="/info">electronics</Link>
          </li>
          <li>
            <Link href={`/products/cart`}>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: { products },
  };
}
