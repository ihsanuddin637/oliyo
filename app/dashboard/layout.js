import LogOutButton from "./Components/Button/LogOutButton";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Oliyo</h2>
        <nav className="flex flex-col space-y-2">
          <a href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
            Add Product
          </a>
          <LogOutButton />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
