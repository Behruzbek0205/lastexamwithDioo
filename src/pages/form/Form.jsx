import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userRedux";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Form = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [ochiq, setOchiq] = useState(false);

  const bekit = (e) => {
    e.preventDefault();
    setOchiq(!ochiq);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !email || !username || !password) {
      alert("Iltimos hamma joylani toldiring");
      return;
    }

    dispatch(addUser({ url, email, username, password }));
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center bg-[black]">
        <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Login
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Url
              </label>
              <input
                type="text"
                placeholder="Enter url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                
                className="w-full py-3 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-3 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="in flex">
                <input
                  type={ochiq ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg rounded-tr-none rounded-br-none bg-white/20 placeholder-white/70 text-white outline-none"
                />
                <button
                  type="button"
                  onClick={bekit}
                  className="bg-white/20 rounded-tr-lg rounded-br-lg px-3 text-white"
                >
                  {ochiq ? <FaEye /> : <IoMdEyeOff />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-purple-600 font-semibold rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
