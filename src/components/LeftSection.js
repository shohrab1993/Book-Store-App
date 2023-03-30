import React from "react";
import BookItems from "./BookItems";
import LeftHeader from "./LeftHeader";

const LeftSection = ({ isUpdate, setIsUpdate }) => {
  return (
    <>
      <div className="order-2 xl:-order-1">
        <LeftHeader />
        <div className="lws-bookContainer">
          <BookItems isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        </div>
      </div>
    </>
  );
};

export default LeftSection;
