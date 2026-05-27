import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AdminLayoutWithPanel({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
