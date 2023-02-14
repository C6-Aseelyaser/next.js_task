import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/Product.module.css";

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/womenClothes");
  const data = await req.json();
  return {
    props: {
      womenClothes: data,
    },
  };
}
const womenClothes = (props) => {
  console.log(props.womenClothes.womenClothes);
  return (
    <div className=" proCate" >
      {props.womenClothes.womenClothes.map((e) => (
        <div key={e.id} className={Styles.proCate}>
          <Image src={e.image} width="200" height="200" alt="img" />
          <div className="contTitlPri">
            <h4 className={Styles.title}>{e.title}</h4>
            <p className={Styles.price}>${e.price}</p>
          </div>
          <Link href={`/products/${e.id}`} className="button">
              More Details
            </Link>
        </div>
      ))}
    </div>
  );
};
export default womenClothes;

