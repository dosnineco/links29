import '../styles/globals.css';
import Layout from "../comp/Layout";
import Header from 'comp/Header';
import Footer from 'comp/Footer';
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
      </>
  )
}

export default MyApp;
