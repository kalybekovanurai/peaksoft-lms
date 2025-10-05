import { NavLink, Outlet } from "react-router-dom";

function MaterialsLayout() {


  function getActiveClass({ isActive }: { isActive: boolean }) {
    return isActive ? "cursor-pointer text-blue-600 font-bold" : "";
  }

  return (
    <div>
      <nav className="min-h-screen">
        <ul className="flex gap-4 mx-auto max-full px-6 py-4 border-b border-gray-400">
          <li>
            <NavLink to="video" className={getActiveClass}>
              Видеоурок
            </NavLink>
          </li>
          <li>
            <NavLink to="presentation" className={getActiveClass}>
              Презентация
            </NavLink>
          </li>
          <li>
            <NavLink to="task" className={getActiveClass}>
              Задание
            </NavLink>
          </li>
          <li>
            <NavLink to="links" className={getActiveClass}>
              Ссылки
            </NavLink>
          </li>
          <li>
            <NavLink to="tests" className={getActiveClass}>
              Тесты
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MaterialsLayout;
