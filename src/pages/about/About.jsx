import { AiOutlineDelete, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/userRedux";

const About = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const del = (id) => {
    if (window.confirm("Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className=" bg-[#F5F5F5] py-16 px-4 flex justify-center">
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {user.length > 0 ? (
          user.map((item) => (
            <div
              key={item.id}
              className="w-[320px] bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <img
                src={
                  item.url ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt={item.username}
                className="w-28 h-28 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {item.username}
              </h3>
              <div className="flex items-center justify-center text-gray-600 mb-8">
                <AiOutlineMail className="mr-2" />
                <span className="text-sm break-all">{item.email}</span>
              </div>
              <div className="flex gap-4 w-full">
                <Link
                  to={`/update/${item.id}`}
                  className="flex-1 py-3 rounded-xl bg-gray-100 text-blue-600 font-semibold"
                >
                  <GrEdit className="inline mr-2" size={14} />
                  Edit
                </Link>

                <button
                  onClick={() => del(item.id)}
                  className="flex-1 py-3 rounded-xl bg-gray-100 text-red-500 font-semibold"
                >
                  <AiOutlineDelete className="inline mr-2" size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center opacity-40 mt-20">
            <AiOutlineUser size={70} />
            <p className="text-lg font-bold">Ma'lumot topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;