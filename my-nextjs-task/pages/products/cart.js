import Image from "next/image";
import { useRouter } from "next/router";
const cart = () => {
  //{id} , {product}
  // console.log("id , product" , id ,product)
  // const { title, price ,description,category,image} = product;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {
    query: {title,description,price,image,id},
  } = router ;
  const props = {
    title,
    description,
    price,
    image,
    id
  }
  return (
    <>
    <Image src={props.image} width="100" height="100" alt=""/>
    <span>{props.title}</span>
    <span> | </span>
    <span>{props.price}</span>
    </>
  );
};
export default cart;