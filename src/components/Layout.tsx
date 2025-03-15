import { ReactNode } from "react";

import Navbar from "./core/Navbar";
import Footer from "./common/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className="content-panel">{children}</main>

      <Footer />
    </>
  );
};
