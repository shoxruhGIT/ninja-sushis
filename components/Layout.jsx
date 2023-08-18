import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Provider from "@/pages/api/components/Provider";

const Layout = ({ children }) => {
  return (
    <div className='className="min-w-full min-h-screen bg-[#F5F5F7]"'>
      <Provider>
        <Header />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default Layout;
