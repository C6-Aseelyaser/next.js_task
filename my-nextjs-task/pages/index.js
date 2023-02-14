import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Head from "next/head";
import Account from "@/components/Account";
import Login from "@/components/Login";


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
        <Account/>
        {/* <Login/> */}
        {products.map((product) => (
          <>
          <div key={product.id}>
          <Product key={product.id} product={product} />
          </div>
          </>
        ))}
        </>
      </div>
    </main>
  );
};

export default index;
