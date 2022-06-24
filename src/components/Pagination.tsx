import {
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
} from "react-table";

import { Cols } from "../pages/List";

type UsePaginationProps = UsePaginationOptions<Cols> &
  UsePaginationState<Cols> &
  UsePaginationInstanceProps<Cols>;

export const Pagination = ({
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
  canNextPage,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
  canPreviousPage,
}: UsePaginationProps) => {
  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"\u003c\u003c"}
      </button>{" "}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"\u003c"}
      </button>{" "}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {"\u003e"}
      </button>{" "}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {"\u003e\u003e"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[20, 40, 60].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
