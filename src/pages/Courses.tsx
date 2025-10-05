import { useNavigate } from "react-router-dom";

const COURSES = [
  {
    courseName: "React-18-JS",
    dateOfFinish: "2025-08-18",
    dateOfStart: "2025-08-18",
    description: "19:00 - 21:00 (18.08.25)",
    group: { groupId: 88, groupName: "JS-18-EV" },
    id: 154,
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/png/1755487864562react-js.png",
  },
  {
    courseName: "JS-18-Practice",
    dateOfFinish: "2025-07-23",
    dateOfStart: "2025-07-23",
    description: "1 Ай практика",
    group: { groupId: 88, groupName: "JS-18-EV" },
    id: 153,
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1753279478385images.jpg",
  },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Мои курсы</h2>

      {COURSES.map((el) => {
        return (
          <div
            key={el.id}
            onClick={() => navigate(`${el.courseName}`)}
            className="p-[12px] rounded-3xl flex flex-col gap-[12px] max-w-[300px] border border-gray-300 cursor-pointer hover:shadow-lg transition"
          >
            <img
              className="w-[100%] h-[146px] object-cover rounded-2xl"
              src={el.imageLink}
              alt=""
            />
            <div>
              <p className="font-medium">{el.courseName}</p>
              <p className="text-sm text-gray-500">{el.dateOfStart}</p>
            </div>
            <p className="text-sm">{el.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
