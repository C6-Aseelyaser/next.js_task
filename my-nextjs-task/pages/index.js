import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Head from "next/head";
import Account from "./account";

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: { products },
  };
}

const index = ({ products }) => {
  return (
    <main className="container">
      <Head>
        <title>Home | Online Products</title>
      </Head>
      <div className="main">
        <>
        {/* <Account/> */}
        {products.map((product) => (
          <>
          <Product key={product.id} product={product} />

          </>
        ))}
        </>
      </div>
    </main>
  );
};

export default index;
