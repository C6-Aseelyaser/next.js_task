import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/Product.module.css"


const info = (props)=>{
    console.log(props.info.info)
    return (
        <div className=" proCate" >
          {props.info.info.map((e) => (
            <div key={e.id} >
              <Image src={e.image} width="200" height="200" alt="img" />
              <div className="contTitlPri">
                <h4 >{e.title}</h4>
                <p >${e.price}</p>
      
              </div>
              <Link href="/" className="button">
                  More Details
                </Link>
            </div>
          ))}
        </div>
      );
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