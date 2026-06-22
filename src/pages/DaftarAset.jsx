import {
  Download,
  Plus,
  Search,
  ChevronDown,
  Pencil,
  Trash2,
  UserRoundSearch,
} from "lucide-react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CgOverflow } from "react-icons/cg";

const columnHelper = createColumnHelper();

export default function DaftarAset() {
  const data = [
    {
      no: 1,
      nup: 1,
      kodeBarang: "2010104001",
      namaBarang: "TANAH PLBN ARUK",
      unitKerja: "Unit Pos Lintas Batas Negara Aruk",
      kondisi: "Baik",
      status: "approved",
    },
    {
      no: 2,
      nup: 3,
      kodeBarang: "2010104001",
      namaBarang: "Tanah Karantina PLBN Napan",
      unitKerja: "Unit Pos Lintas Batas Negara Napan",
      kondisi: "Baik",
      status: "approved",
    },
    {
      no: 3,
      nup: 4,
      kodeBarang: "2010104001",
      namaBarang: "Tanah Pom Pamtas TNI Napan",
      unitKerja: "Unit Pos Lintas Batas Negara Napan",
      kondisi: "Baik",
      status: "approved",
    },
    {
      no: 4,
      nup: 5,
      kodeBarang: "2010104001",
      namaBarang: "Tanah Bangunan Kantor Pemerintah",
      unitKerja: "Unit Pos Lintas Batas Negara Entikong",
      kondisi: "Baik",
      status: "pending",
    },
    {
      no: 5,
      nup: 6,
      kodeBarang: "2010104001",
      namaBarang: "TANAH PLBN SEI NYAMUK",
      unitKerja: "Unit Pos Lintas Batas Negara Sei Nyamuk",
      kondisi: "Baik",
      status: "approved",
    },
  ];

  const columns = [
    columnHelper.accessor("no", {
      header: "No.",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("nup", {
      header: "NUP",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("kodeBarang", {
      header: "Kode Barang",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("namaBarang", {
      header: "Nama Barang",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("unitKerja", {
      header: "Unit Kerja",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("kondisi", {
      header: "Kondisi",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={`badge px-3 py-2 ${
            info.getValue() === "approved"
              ? "bg-success"
              : "bg-warning text-dark"
          }`}
          style={{
            borderRadius: "8px",
            textTransform: "capitalize",
          }}
        >
          {info.getValue()}
        </span>
      ),
    }),

    columnHelper.display({
      id: "action",
      header: "Aksi",
      cell: () => (
        <div className="d-flex gap-2">
          <button className="btn btn-light border">
            <UserRoundSearch size={18} />
          </button>

          <button className="btn btn-light border">
            <Pencil size={18} />
          </button>

          <button className="btn btn-light border">
            <Trash2 size={18} />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {/* HEADER ATAS (SAMA KAYAK DASHBOARD) */}
      <div className="border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold mb-1">Daftar Aset</h3>
        </div>

        <div className="d-flex gap-2">
          <div
            className="bg-white border rounded d-flex align-items-center px-3"
            style={{
              width: "220px",
              height: "45px",
            }}
          >
            <Search size={18} color="#999" />

            <input
              type="text"
              placeholder="Cari"
              className="border-0 ms-2 w-100"
              style={{
                outline: "none",
              }}
            />
          </div>
          <button
            className="btn bg-white border d-flex align-items-center justify-content-between"
            style={{
              width: "150px",
            }}
          >
            Filter By
            <ChevronDown size={18} />
          </button>

          <button
            className="btn text-white d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#7C5CFC",
            }}
          >
            <Plus size={16} />
            Aset
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* SEARCH & FILTER */}
        <div className="d-flex justify-content-end gap-2 mb-4">
          

          
        </div>

        
        <div className="row g-4">
          {/* SIDEBAR FILTER */}
          <div className="col-lg-3">
            <div className="bg-white rounded-4 p-4 border h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-semibold mb-0">Kelompok Aset</h5>

                <ChevronDown size={18} />
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    (2) Tanah
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    (3) Alat Angkutan Bermotor
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    (3) Peralatan Dan Mesin Non TIK
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    (4) Gedung Dan Bangunan
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* TABEL */}
          <div className="col-lg-9" style={{ minWidth: 0 }}>
            <div className="bg-white rounded-4 border p-4">
              <div className="table-responsive"
              style={{
    overflowX: "auto",
    width: "100%",
  }}>
                <table className="table align-middle">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="fw-semibold text-secondary border-0 pb-3"
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
                    style={{ width: "80px" }}
                  >
                    <option>10</option>
                  </select>

                  <span>
                    of <b>18,901</b> records
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span>
                    Page 1 of <b>1,891</b>
                  </span>

                  <span>|</span>

                  <span>Go to page:</span>

                  <input
                    type="text"
                    className="form-control"
                    value="1"
                    readOnly
                    style={{ width: "60px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}