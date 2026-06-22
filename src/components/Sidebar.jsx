import {
  LayoutDashboard,
  ClipboardList,
  CheckSquare,
  Users,
  FileText,
  Folder,
  Settings,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {

  const [openSettings, setOpenSettings] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
  className="bg-white border-end vh-100 overflow-auto position-relative"
  style={{
    flex: `0 0 ${collapsed ? "90px" : "240px"}`,
    transition: "0.3s",
  }}
>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="btn btn-light border position-absolute"
        style={{
          top: "20px",
          right: "-15px",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          padding: 0,
          zIndex: 1000,
        }}
      >
        {collapsed ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronLeft size={16} />
        )}
      </button>

      {/* LOGO */}
      <div className="p-4">
        {!collapsed && (
          <h2 className="fw-bold">Aset BNPP</h2>
        )}
      </div>

      <div className="px-3">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <LayoutDashboard size={18} />
          {!collapsed && "Dashboard"}
        </NavLink>

        {/* Daftar Aset */}
        <NavLink
          to="/daftar-aset"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <ClipboardList size={18} />
          {!collapsed && "Daftar Aset"}
        </NavLink>

        {/* Persetujuan */}
        <NavLink
          to="/persetujuan"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <CheckSquare size={18} />
          {!collapsed && "Persetujuan"}
        </NavLink>

        {/* Pengelola */}
        <NavLink
          to="/pengelola"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <Users size={18} />
          {!collapsed && "Pengelola"}
        </NavLink>

        {/* Laporan */}
        <NavLink
          to="/laporan"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <FileText size={18} />
          {!collapsed && "Laporan"}
        </NavLink>

        {/* Dokumen */}
        <NavLink
          to="/dokumen"
          className={({ isActive }) =>
            `btn w-100 text-start mb-2 d-flex align-items-center gap-2 ${
              isActive ? "active-sidebar" : "sidebar-menu"
            }`
          }
        >
          <Folder size={18} />
          {!collapsed && "Dokumen"}
        </NavLink>

        {/* SETTINGS */}
        <button
          onClick={() => setOpenSettings(!openSettings)}
          className="btn w-100 text-start mb-2 d-flex align-items-center justify-content-between sidebar-menu"
        >
          <div className="d-flex align-items-center gap-2">
            <Settings size={18} />
            {!collapsed && "Settings"}
          </div>

          {!collapsed && (
            openSettings ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )
          )}
        </button>

        {/* SUBMENU */}
        {openSettings && !collapsed && (
          <div className="ms-4 d-flex flex-column">

            <NavLink
              to="/settings/provinsi"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Provinsi
            </NavLink>

            <NavLink
              to="/settings/kabupaten-kota"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Kabupaten Kota
            </NavLink>

            <NavLink
              to="/settings/kecamatan"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Kecamatan
            </NavLink>

            <NavLink
              to="/settings/kelurahan-desa"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Kelurahan / Desa
            </NavLink>

            <NavLink
              to="/settings/satuan-kerja"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Satuan Kerja
            </NavLink>

            <NavLink
              to="/settings/kode-aset"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Kode Aset
            </NavLink>

            <NavLink
              to="/settings/kode-barang"
              className={({ isActive }) =>
                `btn text-start mb-1 ${
                  isActive ? "active-submenu" : "submenu-item"
                }`
              }
            >
              Kode Barang
            </NavLink>

          </div>
        )}

      </div>
    </div>
  );
}