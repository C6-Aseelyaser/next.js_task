import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/Product.module.css"


const info = (props)=>{
    console.log(props.info.info)
return (
    <div className="container">
    <div className="main">
    <div className={Styles.product} >
        {props.info.info.map(e =>(
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
    </div>
    </div>
)
}
export default info;

export async function getStaticProps() {
    const req = await fetch("http://localhost:3000/api/info");
    const data = await req.json();
  
    return {
      props: {
        info : data
      }
    }
  }