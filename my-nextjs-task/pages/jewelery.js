import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/jewelery");
  const data = await req.json();
  return {
    props: {
      jewelery: data,
    },
  };
}
const jewelery = (props) => {
  return (
    <div className=" proCate" >
      {props.jewelery.jewelery.map((e) => (
        <div key={e.id} >
          <Image src={e.image} width="200" height="200" alt="img" />
          <div className="contTitlPri">
            <h4 >{e.title}</h4>
            <p >${e.price}</p>
  
          </div>
          <Link href={`/products/${e.id}`} className="button">
              More Details
            </Link>
        </div>
      ))}
    </div>
  );
};
export default jewelery;
