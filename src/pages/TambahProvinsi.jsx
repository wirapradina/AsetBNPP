import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TambahProvinsi() {
  const navigate = useNavigate();

  const [idProvinsi, setIdProvinsi] = useState("");
  const [namaProvinsi, setNamaProvinsi] = useState("");
  const [status, setStatus] = useState("Aktif");

  const handleSubmit = (e) => {
    e.preventDefault();

    // nanti diganti API backend
    console.log({
      idProvinsi,
      namaProvinsi,
      status,
    });

    navigate("/provinsi");
  };

  return (
    <div className="p-4">
      <h2 className="fw-bold mb-4">Tambah Provinsi</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>ID Provinsi</label>
          <input
            type="text"
            className="form-control"
            value={idProvinsi}
            onChange={(e) => setIdProvinsi(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Nama Provinsi</label>
          <input
            type="text"
            className="form-control"
            value={namaProvinsi}
            onChange={(e) => setNamaProvinsi(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Aktif</option>
            <option>Tidak Aktif</option>
          </select>
        </div>

        <button className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
}