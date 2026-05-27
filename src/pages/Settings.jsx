import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="d-flex vh-100 bg-light">

      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h1 className="fw-bold">Settings</h1>
      </div>

    </div>
  );
}