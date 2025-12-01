import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateLogin } from "../../redux/userRedux";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.value);
  const user = users.find((item) => item.id === id);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUrl(user.url);
      setEmail(user.email);
      setUsername(user.username);
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateLogin({
        id,
        url,
        username,
        email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <hr className="text-[#B5B5B5] w-full" />
      <div className="flex items-center justify-center inter text-xl sm:text-2xl mt-10">
        Update page
      </div>

      <div className="form mt-10 sm:mt-20 md:mt-30 flex justify-center px-4 my-30">
        <div className="input w-full sm:w-[500px] md:w-[600px] lg:w-[700px] rounded-xl border p-4">
          <form
            className="px-4 sm:px-10 py-5 flex flex-col gap-5"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-col gap-1">
              <label className="flex items-center justify-center inter font-medium text-sm sm:text-base">
                New Url
              </label>
              <input
                type="url"
                placeholder="New Url"
                value={url}
                className="border px-3 py-2 rounded-2xl outline-none text-sm sm:text-base"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="flex items-center justify-center inter font-medium text-sm sm:text-base">
                New email
              </label>
              <input
                type="email"
                placeholder="New email"
                value={email}
                className="border px-3 py-2 rounded-2xl outline-none text-sm sm:text-base"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="flex items-center justify-center inter font-medium text-sm sm:text-base">
                New username
              </label>
              <input
                type="text"
                placeholder="New username"
                value={username}
                className="border px-3 py-2 rounded-2xl outline-none text-sm sm:text-base"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 sm:py-3 rounded-2xl text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;