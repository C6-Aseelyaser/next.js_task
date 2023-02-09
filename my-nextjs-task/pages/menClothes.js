import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/menClothes");
  const data = await req.json();
  return {
    props: {
      menClothes: data,
    },
  };
}

const menClothes = (props) => {
  console.log(props.menClothes.menclothes)
  return (<div>
    {props.menClothes.menclothes.map(e =>(
                  <div key={e.id}>
                  <div>
             <Image src={e.image} width="200" height="200" alt="img"/>
         </div>
         <ul>
             <li> {e.title} </li>
             <li> {e.price} </li>
         </ul>
         <Link href="/" className='button'>More Details</Link>
             </div>
    ))}
  </div>);
};
export default menClothes;
