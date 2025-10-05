import { NavLink, Outlet } from "react-router-dom";

function CoursesLayout() {
  function getActiveClass({ isActive }: { isActive: boolean }) {
    return isActive
      ? "text-blue-600 underline font-semibold"
      : "text-gray-700 hover:text-blue-500 transition";
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="mx-auto max-full px-6 py-4 border-b border-gray-400">
        <nav>
          <ul className="flex justify-start gap-12 text-lg font-medium">
            <li>
              <NavLink to="materials" className={getActiveClass}>
                Материалы
              </NavLink>
            </li>
            <li>
              <NavLink to="students" className={getActiveClass}>
                Студенты
              </NavLink>
            </li>
            <li>
              <NavLink to="rating" className={getActiveClass}>
                Рейтинг группы
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-8 px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default CoursesLayout;
