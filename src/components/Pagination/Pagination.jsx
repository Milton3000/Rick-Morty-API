import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);


  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>

        {`
@media (max-width: 768px) {
.next, .prev {
  display: none;
}
.pagination{
  font-size: 14px;
}
}
`}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        nextClassName="btn btn-light next"
        previousClassName="btn btn-light prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

// BASE CODE FOR NEXT AND PREV BUTTONS

//   const next = () => {
//     setPageNumber((prev) => prev + 1);
//   };

//   const prev = () => {
//     if(pageNumber === 1) return;
//     setPageNumber((prev) => prev - 1);
//   };

//   return (
//     <div className="container d-flex justify-content-center gap-5 my-5">
//       <button onClick={prev} className="btn btn-primary">
//         Prev
//       </button>
//       <button onClick={next} className="btn btn-primary">
//         Next
//       </button>
//     </div>
//   );
// };

export default Pagination;
