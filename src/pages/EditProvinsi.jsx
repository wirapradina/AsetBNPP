import { ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import provinsiData from "../data/provinsiData";
import { useState } from "react";

export default function EditProvinsi() {
  const { id } = useParams();
  const navigate = useNavigate();

  const provinsi = provinsiData.find(
    (item) => item.id === Number(id)
  );

  const [namaProvinsi, setNamaProvinsi] = useState(
    provinsi?.namaProvinsi || ""
  );

  const [status, setStatus] = useState(
    provinsi?.status || ""
  );

  const handleSave = () => {
    if (provinsi) {
      provinsi.namaProvinsi = namaProvinsi;
      provinsi.status = status;
    }

    alert("Data berhasil diperbarui");
    navigate("/settings/provinsi");
  };

  if (!provinsi) {
    return (
      <div className="p-4">
        <h3>Data tidak ditemukan</h3>
      </div>
    );
  }

  return (
    <div className="p-4">

      {/* Header */}
      <div className="d-flex align-items-center gap-3 mb-4">

        <Link
          to="/settings/provinsi"
          className="btn btn-light border"
        >
          <ArrowLeft size={18} />
        </Link>

        <h2 className="fw-bold mb-0">
          Edit Provinsi
        </h2>

      </div>

      {/* Form */}
      <div className="bg-white rounded-4 p-4">

        <div className="mb-3">
          <label className="form-label fw-semibold">
            ID Provinsi
          </label>

          <input
            type="text"
            className="form-control"
            value={provinsi.idProvinsi}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Nama Provinsi
          </label>

          <input
            type="text"
            className="form-control"
            value={namaProvinsi}
            onChange={(e) => setNamaProvinsi(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Status
          </label>

          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Aktif">Aktif</option>
            <option value="Tidak Aktif">
              Tidak Aktif
            </option>
          </select>
        </div>

        <div className="d-flex justify-content-end gap-2">

          <button
            className="btn text-white"
            style={{
              backgroundColor: "#7C5CFC",
            }}
            onClick={handleSave}
          >
            Simpan Perubahan
          </button>

        </div>

      </div>

    </div>
  );
}