import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";
import { clear } from "@testing-library/user-event/dist/clear";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
