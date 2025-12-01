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
    <div>
      <hr className="text-[#B5B5B5] w-[1521px]" />
      <div className="main">
        <div className="top">
          <div className="grid grid-cols-7 w-[1210px] text-[#ACACAC] font-semibold px-4">
            <p>Url</p>
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
        <div className="max-w-[1240px] mt-6 flex flex-col gap-14">
          {user.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-7 items-center bg-[#F6F6F6] border p-3 rounded-lg w-[1210px]"
            >
              <div>
                <img
                  src={item.url}
                  alt={item.username}
                  className="w-[60px] h-[60px] object-cover rounded"
                />
              </div>
              <p>{item.username}</p>
              <p>{item.email}</p>
              <div className="flex justify-end gap-4 text-xl text-[black] col-span-4">
                <Link to={`/update/${item.id}`}>
                  <GrEdit className="cursor-pointer hover:text-blue-600 transition" />
                </Link>
                <AiOutlineDelete
                  onClick={() => del(item.id)}
                  className="cursor-pointer hover:text-red-600 transition"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;