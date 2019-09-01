import Head from 'next/head';
import Header from "components/molecules/Header";
import Footer from "../../molecules/Footer";
import "styles/index.scss";

const Layout = ({children, title}) => (
  <>
    <Head>
      <title>{!!title ? title : ''}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <div>
      <Header />

      <div className='layout'>
        {children}
        <Footer/>
      </div>
    </div>
  </>
);

export default Layout;
