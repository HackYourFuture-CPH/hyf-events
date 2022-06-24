import { useMemo } from "react";
import { useTable, TableOptions, Column, usePagination } from "react-table";
import { CSVLink } from "react-csv";

import { Loading } from "../components/Loading";
import { Pagination } from "../components/Pagination";
import { TableList } from "../components/TableList";
import { Header } from "../components/Header";
import { EventbriteEventData, EventsData } from "../helpers/eventbriteEvents";

export type Cols = {
  EventName: string;
  Date: string;
  NumberOfAttendees: string;
  Location: string;
};

export const List = (fetchedData: EventsData) => {
  const columns: Column<Cols>[] = useMemo(
    () => [
      {
        Header: "Event name",
        accessor: "EventName", // accessor is the "key" in the data
      },
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Number of attendees",
        accessor: "NumberOfAttendees",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
    ],
    []
  );

  const data = useMemo(
    (): Cols[] =>
      fetchedData.data.map((el: EventbriteEventData) => {
        return {
          EventName: el.name.text,
          Date: new Date(el.start.utc).toLocaleString(),
          NumberOfAttendees: `${el.ticket_classes[0].quantity_sold} / ${el.capacity}`,
          Location: el.online_event ? "Online" : "Real life",
        };
      }),
    [fetchedData.data]
  );

  const options: TableOptions<{
    EventName: string;
    Date: string;
    NumberOfAttendees: string;
    Location: string;
  }> = {
    data,
    columns,
    initialState: { pageIndex: 0, pageSize: 20 },
  };

  const tableInstance = useTable(options, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <Header />
      <main>
        <h1>List of the past events</h1>
        {data.length ? (
          <>
            <CSVLink data={data}>Export to CSV</CSVLink>
            <TableList
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              page={page}
              prepareRow={prepareRow}
            />
            <Pagination
              page={page}
              gotoPage={gotoPage}
              previousPage={previousPage}
              nextPage={nextPage}
              pageCount={pageCount}
              canNextPage={canNextPage}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
              pageSize={pageSize}
              setPageSize={setPageSize}
              canPreviousPage={canPreviousPage}
            />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
};
