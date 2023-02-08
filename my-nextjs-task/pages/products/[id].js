// products/productsId(MoreDetails)/[id].js

import Image from "next/image";
import Styles from "./../../styles/PageProduct.module.css"
const productPage = ({product}) => {
  console.log("product00000000", product)
  const {id, title, price ,description,category,image} = product;
  return <div className={Styles.product + "container"}>
    <div><Image src={image} width="300" height="500" alt=""/></div>
    <div>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h1>{price} $</h1>
      <p>{description}</p>
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
