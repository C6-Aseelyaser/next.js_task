import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Head from "next/head";

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
        {products.map((product) => (
          <>
          <Product key={product.id} product={product} />

          </>
        ))}
      </div>
    </main>
  );
};

export default index;
