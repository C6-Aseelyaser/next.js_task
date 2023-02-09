import Layout from "./../components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps,session }) {
  return (
    <Layout>
    <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
  </Layout>
  );
}
export default App;
