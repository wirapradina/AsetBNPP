import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import DaftarAset from "./pages/DaftarAset";
import Persetujuan from "./pages/Persetujuan";
import Pengelola from "./pages/Pengelola";
import Laporan from "./pages/Laporan";
import Dokumen from "./pages/Dokumen";

import Provinsi from "./pages/Provinsi";
import Kecamatan from "./pages/Kecamatan";
import KabupatenKota from "./pages/KabupatenKota";
import KelurahanDesa from "./pages/KelurahanDesa";
import SatuanKerja from "./pages/SatuanKerja";
import KodeAset from "./pages/KodeAset";
import KodeBarang from "./pages/KodeBarang";

import EditProvinsi from "./pages/EditProvinsi";
import TambahProvinsi from "./pages/TambahProvinsi";

import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* LAYOUT DENGAN SIDEBAR */}
        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/daftar-aset" element={<DaftarAset />} />

          <Route path="/persetujuan" element={<Persetujuan />} />

          <Route path="/pengelola" element={<Pengelola />} />

          <Route path="/laporan" element={<Laporan />} />

          <Route path="/dokumen" element={<Dokumen />} />

          <Route
            path="/settings/satuan-kerja"
            element={<SatuanKerja />}
          />
          <Route
            path="/settings/kode-aset"
            element={<KodeAset />}
          />

          <Route
            path="/settings/kode-barang"
            element={<KodeBarang />}
          />

          {/* SETTINGS */}
          <Route
            path="/settings/provinsi"
            element={<Provinsi />}
          />
          <Route
            path="/provinsi/edit/:id"
            element={<EditProvinsi />}
          />
          <Route path="/provinsi/tambah" element={<TambahProvinsi />} />

          <Route
            path="/settings/kecamatan"
            element={<Kecamatan />}
          />

          <Route
            path="/settings/kabupaten-kota"
            element={<KabupatenKota />}
          />

          <Route
            path="/settings/kelurahan-desa"
            element={<KelurahanDesa />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;