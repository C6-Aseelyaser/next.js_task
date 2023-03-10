import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/Product.module.css"

const Product = ({product}) => {
    // console.log("pro" ,product)
    const {title,price,image,id,category} = product
  return (
    <div className={Styles.product} key={id}>
        <div>
            <Image src={image} width="200" height="200" alt="img"/>
        </div>
        <ul className={Styles.ulPro}>
            <li> {title} </li>
            <li> {price} </li>
        </ul>
        <Link href={`/products/${id}`} className='button'>More Details</Link>
    </div>
  )
};
export default Product;
