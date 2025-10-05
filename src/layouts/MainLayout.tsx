import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <header className="ml-[200px] ">
        <code>Copyright &copy; 2025 in Peaksoft</code>
      </header>
      <div>
        <Navbar />
      </div>
      <main className="ml-[200px] ">
            <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
