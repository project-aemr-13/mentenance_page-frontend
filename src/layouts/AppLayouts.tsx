import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../components/ui/Header";
// import Footer from "../components/ui/Footer";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
