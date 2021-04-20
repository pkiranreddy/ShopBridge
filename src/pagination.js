import React from "react";

export const Pagination = ({ itemsPerPage, items, paginate }) => {
  const pages = [];
  let totalLength = items.length;
  for (let i = 1; i <= Math.ceil(totalLength / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    pages.length > 1 && (
      <nav className="mb-1">
        <ul className="pagination d-flex justify-content-center align-items-center m-1 ">
          {pages.map(page => (
            <li key={page} className="page-item" onClick={() => paginate(page)}>
              <a href="!#" className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};
