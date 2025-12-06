import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/userRedux";

const About = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="w-full pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="hidden md:grid grid-cols-12 gap-4 text-[#ACACAC] font-semibold px-4 mb-4 border-b pb-2">
          <p className="col-span-2 lg:col-span-1">Image</p>
          <p className="col-span-4 lg:col-span-4">Name</p>
          <p className="col-span-4 lg:col-span-5">Email</p>
          <p className="col-span-2 text-right">Actions</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {user.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6F6F6] border border-gray-200 p-4 rounded-xl flex flex-col items-center text-center md:grid md:grid-cols-12 md:text-left md:items-center md:gap-4"
            >
              <div className="md:col-span-2 lg:col-span-1 mb-3 md:mb-0">
                <img
                  src={item.url}
                  alt={item.username}
                  className="w-20 h-20 md:w-[60px] md:h-[60px] object-cover rounded-full md:rounded-lg   bg-white"
                />
              </div>
              <div className="md:col-span-4 lg:col-span-4 w-full mb-2 md:mb-0">
                <span className="md:hidden text-xs text-gray-400  font-bold block mb-1">
                  Name
                </span>
                <p className="font-medium text-gray-800 text-lg md:text-base">
                  {item.username}
                </p>
              </div>
              <div className="md:col-span-4 lg:col-span-5 w-full mb-4 md:mb-0 ">
                <span className="md:hidden text-xs text-gray-400  font-bold block mb-1">
                  Email
                </span>
                <p className="text-gray-600" title={item.email}>
                  {item.email}
                </p>
              </div>
              <div className="md:col-span-2 w-full flex justify-center md:justify-end gap-6 md:gap-4 text-2xl md:text-xl text-gray-700  md:border-none pt-3 md:pt-0 mt-2 md:mt-0">
                <Link to={`/update/${item.id}`}>
                  <GrEdit className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform" />
                </Link>
                <button onClick={() => del(item.id)}>
                  <AiOutlineDelete className="cursor-pointer hover:text-red-600 hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
