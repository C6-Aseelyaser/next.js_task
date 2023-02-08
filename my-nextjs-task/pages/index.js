import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

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
      <div className="main">
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
      </div>
    </main>
  );
};

export default index;
