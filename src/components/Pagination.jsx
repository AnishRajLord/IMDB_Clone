import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Pagination({handlePrevious, handleNext, pageNo}) {
  return (
    <>
      <div className="bg-gray-400 p-4 mt-4 flex justify-center">
        <div className="px-8" onClick={handlePrevious}>
          <ArrowBackIcon />
        </div>
        <div className="font-bold">{pageNo}</div>
        <div className="px-8" onClick={handleNext}>
          <ArrowForwardIcon />
        </div>
      </div>
    </>
  );
}

export default Pagination;
