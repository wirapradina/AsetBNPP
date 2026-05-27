import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Bell } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column"
  style={{
    backgroundColor: "#f5f6fa",
  }}
>
        <div
          className="bg-white border-bottom px-4 py-1 d-flex justify-content-end align-items-center"
        >
          <div className="d-flex align-items-center gap-2">

            <div className="d-flex align-items-center gap-2">

              <div
                className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "35px",
                  height: "35px",
                  fontWeight: "bold",
                }}
              >
                A
              </div>

            </div>

          </div>

        </div>

        <div className="flex-grow-1 overflow-auto">
          <Outlet />
        </div>

      </div>

    </div>
  );
}