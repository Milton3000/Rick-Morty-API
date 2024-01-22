import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber===1? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextclassNameName="btn btn-primary"
      previousclassNameName="btn btn-primary"
      pageclassNameName="page-item"
      pageLinkclassNameName="page-link"
      activeclassNameName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
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
