/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Styles from "./../styles/Account.module.css";
import Link from "next/link";


const Account = () => {
  const { data: session, status } = useSession(); //{required: true}
  if (status === "authenticated") {
    // auth UnAuth loading
    return (
      <div>
        <p> Welcome, {session.user.name}</p>
        <img src={session.user.image} alt="" style={{width:75 , borderRadius:50}} />
        <button onClick={() => signOut()}>Sigin Out</button>
      </div>
    );
  } else {
    return (
      <span className="acc">
        <span className="acc" style={{color:"red" , borderRadius:50}}>You're Not Login ...</span>
        <Link href={`/login`}>Login</Link>
      </span>
    );
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};

export default Account;


