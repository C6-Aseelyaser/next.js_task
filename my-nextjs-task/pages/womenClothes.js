import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/womenClothes");
  const data = await req.json();

  return {
    props: {
        womenClothes : data
      }
  };
}

const womenClothes = (props) => {
    console.log(props.womenClothes.womenClothes)
  return (
    <div>
        {props.womenClothes.womenClothes.map(e => (
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
    </div>
  )
};
export default womenClothes;
