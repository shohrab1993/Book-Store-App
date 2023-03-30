import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
