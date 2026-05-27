import { Download, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div>

      {/* HEADER DASHBOARD */}
      <div className="border-bottom px-4 py-3 d-flex justify-content-between align-items-center">

        <div>
          <h3 className="fw-bold mb-1">
            Hi, Badan Nasional Pengelola Perbatasan
          </h3>

          <p className="text-muted mb-0">
            Selamat datang di Sistem Monitoring Aset
          </p>
        </div>

        <div className="d-flex gap-2">

          <button className="btn btn-light border d-flex align-items-center gap-2">
            <Download size={16} />
            Download
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
{/* 
      <div className="p-4">

        <div
          className="bg-white rounded border d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          Dashboard Content
        </div>

      </div> */}

    </div>
  );
}