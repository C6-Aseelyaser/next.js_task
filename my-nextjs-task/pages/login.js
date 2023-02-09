/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  console.log("session" ,session)
  if (session) {
    return (
      <>

      <img src={session.user.image} alt="" style={{width:75 , borderRadius:50}} />
      <p>Welcome, {session.user.name}.. You're Signed in as {session.user.email} </p> 
       {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

