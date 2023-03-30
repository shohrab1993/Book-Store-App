import React from "react";

const LeftHeader = ({ isFeatured, setFeatured }) => {
  const handleFeature = (e) => {
    e.preventDefault();
    setFeatured(!isFeatured);
  };
  const handleAll = (e) => {
    e.preventDefault();
    setFeatured(false);
  };
  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={` ${
              isFeatured ? "filter-btn" : "active-filter "
            } filter-btn`}
            id="lws-filterAll"
            onClick={handleAll}
          >
            All
          </button>
          <button
            className={` ${
              isFeatured ? "active-filter" : "filter-btn"
            } filter-btn`}
            id="lws-filterFeatured"
            onClick={handleFeature}
          >
            Featured
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftHeader;
