import React from "react";
import Layout from "./Layout";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import Adress from "./adress";

export default function Index({ Component, pageProps }) {
  return (
    <Layout>
      <Adress/>
    </Layout>
  );
}

Index.getLayout = function PageLayout(page) {
  return (
   <>
    <Header/>
    {page}
    <Footer/>
   </>
  );
};
