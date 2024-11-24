import React from "react";
import Navbar from "./(components)/Navbar/page";
import SideBar from "./(components)/Sidebar/page";
import StoreProvider from "./redux";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* SideBar */}
      <SideBar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DasboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DasboardLayout>{children}</DasboardLayout>
    </StoreProvider>
  );
};

export default DasboardWrapper;
