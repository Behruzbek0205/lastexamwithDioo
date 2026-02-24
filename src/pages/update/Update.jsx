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
      setUrl(user.url || "");
      setEmail(user.email || "");
      setUsername(user.username || "");
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
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Update Profile
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleUpdate}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              New URL
            </label>
            <input
              type="url"
              placeholder="Enter new url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              New Email
            </label>
            <input
              type="email"
              placeholder="Enter new email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              New Username
            </label>
            <input
              type="text"
              placeholder="Enter new username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default Update;