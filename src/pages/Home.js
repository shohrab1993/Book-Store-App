import React, { useState } from "react";
import BookInput from "../components/BookInput";
import BookItems from "../components/BookItems";
import Layout from "../components/Layout";
import LeftHeader from "../components/LeftHeader";
import Nav from "../components/Nav";

const Home = () => {
  const [isFeatured, setFeatured] = useState(false);

  return (
    <>
      <Nav />

      <Layout>
        {/* <LeftSection isUpdate={isUpdate} setIsUpdate={setIsUpdate} /> */}
        <div className="order-2 xl:-order-1">
          <LeftHeader isFeatured={isFeatured} setFeatured={setFeatured} />
          <div className="lws-bookContainer">
            <BookItems isFeatured={isFeatured} />
          </div>
        </div>
        <BookInput />
      </Layout>
    </>
  );
};

export default Home;
