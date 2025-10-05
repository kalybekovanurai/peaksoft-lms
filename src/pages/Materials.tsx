import { Outlet, useNavigate, useParams } from "react-router-dom";

const MATERIALS = [
  {
    id: 2404,
    name: "Lesson 1 - Node.js | npm & yarn & pnpm | Babel | library vs framework | Why React?",
    orderNum: 1,
    showDate: null,
  },
  {
    id: 2405,
    name: "Lesson 2 - Component | JSX | import/export | props",
    orderNum: 2,
    showDate: null,
  },
  {
    id: 2406,
    name: "Lesson 3 - Expense project start with Figma | Components in details | State",
    orderNum: 3,
    showDate: null,
  },
];

function Materials() {
  const navigate = useNavigate();
  const { materialId } = useParams();
  // если выбран конкретный урок показываем внутреннюю навигацию
  if (materialId) {
    return <Outlet />;
  }

  return (
    <div>
      {MATERIALS.map((el) => (
        <div
          key={el.id}
          onClick={() => navigate(`${el.id}`)}
          className="bg-white p-4 border border-gray-300 rounded-2xl mb-4 hover:shadow-lg cursor-pointer"
        >
          <h2 className="font-medium">
            {el.orderNum}. {el.name}
          </h2>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default Materials;
