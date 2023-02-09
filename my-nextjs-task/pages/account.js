/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession(); //{required: true}
  if (status === "authenticated") {
    // auth UnAuth loading
    return (
      <div>
        <p> Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sigin Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You're Not Signed in.....</p>
      </div>
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
