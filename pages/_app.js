import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    //모든 문서에 들어가는 components
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
