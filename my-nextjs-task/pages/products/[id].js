// products/productsId(MoreDetails)/[id].js

import Product from "@/components/Product";
import Image from "next/image";
import Link from "next/link";
import Styles from "./../../styles/PageProduct.module.css"
import Router from "next/router";


const productPage = ({product}) => {
  console.log("product00000000", product)
  const {id, title, price ,description,category,image} = product;

//==============
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
  return <div className={Styles.product + "container"}>
    <div><Image src={image} width="300" height="500" alt=""/></div>
    <div>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h1>{price} $</h1>
      <p>{description}</p>
      {/* <Link href={`/products/cart`} className='button' product={product} id={id} >cart {id} </Link> */}
      {/* <a onClick={()=> sendProps()}> cart</a> */}
      <Link onClick={()=> sendProps()} href={`/products/cart`}> cart</Link>
      <Link  href={`/products/test`}> test</Link>
    </div>
  </div>;
  
};
export default productPage;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  console.log("products1111111111111", products);
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

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();
  return {
    props: {product},
  };
}
