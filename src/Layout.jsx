import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Layout() {
  return (
    <>
      <div className=" bg-white px-2 md:px-8 shadow-md sticky top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <Outlet />

      <div className="px-2 md:px-8">
        <Footer />
      </div>
    </>
  );
}
