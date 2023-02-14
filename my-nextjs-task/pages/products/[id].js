// products/productsId(MoreDetails)/[id].js
import Product from "@/components/Product";
import Image from "next/image";
import Link from "next/link";
import Styles from "./../../styles/PageProduct.module.css"
import Router from "next/router";
//=-=-=-=-=-= getStaticPaths =-=-=-=-=-=
export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  // console.log("products111", products);
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString()},
    };
  });
  return {
    paths,
    fallback:false
  };
}
//=-=-=-=-=-= getStaticProps =-=-=-=-=-=
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();
  return {
    props: {product},
  };
}
//=-=-=-=-=-= productPage =-=-=-=-=-=
const productPage = ({product}) => {
  console.log("product00000000", product)
  const {id, title, price ,description,category,image} = product;
//=-=-=-=-=-= sendProps =-=-=-=-=-=
function sendProps(){
  Router.push({
    pathname:"/products/cart",
    query: {
      title,
      description,
      price,
      image,
      id
    }
  })
}
  return <div className={ Styles.itemContainer}>
    <h2>{title}</h2>
    <br/> <Image src={image} width="300" height="500" alt=""/>
    <br/> <p>Price: {price}$ </p>
    <br/> <p>Category: {category} </p>
    <br/> <p>Description: {description} </p>
    <Link onClick={()=> sendProps()} href={`/products/cart`} className={Styles.cart}> cart</Link> 
    </div>
};
export default productPage;