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

  return (<div>
        {props.jewelery.jewelery.map(e =>(
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
export default jewelery;
