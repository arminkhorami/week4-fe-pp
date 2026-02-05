import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
        {/* 👇 فضای لازم برای header فیکس */}
      <main style={{ marginTop: "4rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
