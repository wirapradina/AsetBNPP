import { Pencil, Trash2, Plus } from "lucide-react";
import provinsiData from "../data/provinsiData";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { useState } from "react";
const columnHelper = createColumnHelper();

export default function Provinsi() {
  const [data, setData] = useState(provinsiData);
  const [globalFilter, setGlobalFilter] = useState("");

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = [
    columnHelper.display({
      id: "no",
      header: () => (
        <div>
          <div className="mb-2">No.</div>
          <div style={{ height: "38px" }}></div>
        </div>
      ),
      cell: ({ row, table }) =>
        table.getState().pagination.pageIndex *
        table.getState().pagination.pageSize +
        row.index +
        1,
    }),


    columnHelper.accessor("idProvinsi", {
      header: () => (
        <div>
          <div className="mb-2">Id Provinsi</div>
        </div>
      ),
    }),

    columnHelper.accessor("namaProvinsi", {
      header: "Nama Provinsi"
    }),

    columnHelper.accessor("status", {
      header: () => (
        <div>
          <div className="mb-2">Status</div>
        </div>
      ),
    }),

    columnHelper.display({
      id: "action",

      header: () => (
        <div className="text-end">
          <div className="mb-2">Action</div>
          <div style={{ height: "38px" }}></div>
        </div>
      ),

      cell: ({ row }) => (
        <div className="d-flex gap-2 justify-content-end">

          <Link
            to={`/provinsi/edit/${row.original.id}`}
            className="btn btn-light border"
          >
            <Pencil size={18} />
          </Link>

          <button
            className="btn btn-light border"
            onClick={() => handleDelete(row.original.id)}
          >
            <Trash2 size={18} />
          </button>

        </div>
      ),
    }),

  ];
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  return (
    <div className="p-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Provinsi</h2>

        <div className="d-flex gap-3 align-items-center">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            style={{ width: "250px" }}
            value={globalFilter}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
          />

          <Link
            to="/provinsi/tambah"
            className="btn text-white d-flex align-items-center gap-2"
            style={{ backgroundColor: "#7C5CFC" }}
          >
            <Plus size={18} />
            Tambah Baru
          </Link>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-4 p-4">

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>

              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>

                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="fw-semibold text-secondary"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}

                </tr>
              ))}

            </thead>

            <tbody>

              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>

                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}
        <div className="d-flex justify-content-between align-items-center mt-4">

          <div className="d-flex align-items-center gap-2">

            <span>Showing</span>

            <select
              className="form-select"
              style={{ width: "70px" }}
              value={pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>

            <span>
              <b>{table.getRowModel().rows.length}</b> of{" "}
              <b>{table.getFilteredRowModel().rows.length}</b> records
            </span>

          </div>

          <div className="d-flex align-items-center gap-2">

            <span>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              <b>{table.getPageCount()}</b>
            </span>

            <span>|</span>

            <span>Go to page:</span>

            <input
              type="number"
              min={1}
              max={table.getPageCount()}
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;

                if (page >= 0 && page < table.getPageCount()) {
                  table.setPageIndex(page);
                }
              }}
              className="form-control"
              style={{ width: "60px" }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}