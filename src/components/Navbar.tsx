import { NavLink } from "react-router-dom";

function Navbar() {

    function getActiveClass({ isActive }: { isActive: boolean }) {
        return isActive ? "text-red-500 font-bold underline" : "text-blue-500";
    }

  return (
    <nav className="fixed top-0 left-0 w-48 h-full p-4">
      <ul className="flex flex-col gap-6">
        <li>
          <NavLink to="/courses" className={getActiveClass}>
            Мои курсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/announcements" className={getActiveClass}>
            Объявления
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" className={getActiveClass}>
            Расписание
          </NavLink>
        </li>
        <li>
          <NavLink to="/deleted" className={getActiveClass}>
            Корзина
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
