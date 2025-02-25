import { ReactNode } from "react";
import { Footer } from "./common/Footer";
import Navbar from "./core/Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className="content-panel">{children}</main>

      <Footer />
    </>
  );
};
