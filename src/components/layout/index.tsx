import React from "react";
import Header from "../header";
import Footer from "../footer";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout