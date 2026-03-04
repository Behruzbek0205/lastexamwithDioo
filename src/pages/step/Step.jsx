import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdOutlinePayment, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Plus from "../../assets/Plus.svg";

const Step = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "home",
      title: "2118 Thornridge",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
    },
  ]);

  const [formData, setFormData] = useState({
    type: "",
    title: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.type || !formData.title || !formData.address || !formData.phone) return;

    const newAddress = {
      id: Date.now(),
      ...formData,
    };

    setAddresses([...addresses, newAddress]);
    setFormData({ type: "", title: "", address: "", phone: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full pb-10">
      <hr className="text-[#B5B5B5] w-full mb-8" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              <CiLocationOn size={22} />
            </div>
            <div>
              <span className="text-xs block">Step 1</span>
              <h4 className="text-base font-medium">Address</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="text-[#B2B2B2]">
              <span className="text-xs block">Step 2</span>
              <h4 className="text-base font-medium">Shipping</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center">
              <MdOutlinePayment size={20} />
            </div>
            <div className="text-[#B2B2B2]">
              <span className="text-xs block">Step 3</span>
              <h4 className="text-base font-medium">Payment</h4>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-[20px] text-[#17183B] font-medium">
            Select Address
          </h1>

          <div className="flex flex-col gap-6 mt-8">
            {addresses.map((item) => (
              <div key={item.id} className="bg-[#F6F6F6] p-6 rounded-2xl w-full">
                <div className="flex flex-wrap gap-4 items-center">
                  <input
                    type="radio"
                    name="selectedAddress"
                    className="w-5 h-5 accent-black"
                  />
                  <p className="text-[18px]">{item.title}</p>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded uppercase">
                    {item.type}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 gap-3">
                  <p className="text-[16px] text-[#17183B]">
                    {item.address}
                  </p>
                  <div
                    className="flex items-center gap-4 text-[18px] cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdEdit />
                    <span className="font-bold">X</span>
                  </div>
                </div>

                <div className="mt-3 text-base text-gray-600">
                  <span>{item.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showForm && (
          <div className="mt-10 bg-[#F6F6F6] p-6 rounded-2xl">
            <div className="flex flex-col gap-4">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border p-3 rounded-md"
              >
                <option value="">Select Type</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="border p-3 rounded-md"
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Address"
                className="border p-3 rounded-md"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border p-3 rounded-md"
              />

              <button
                onClick={handleSave}
                className="bg-black text-white py-3 rounded-md"
              >
                Save Address
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 w-full flex justify-center">
          <div className="w-full max-w-[1402px] border-b-2 border-dashed flex justify-center">
            <span className="relative top-[18px]">
              <img
                src={Plus}
                className="w-10 h-10 cursor-pointer"
                alt="plus"
                onClick={() => setShowForm(!showForm)}
              />
            </span>
          </div>
        </div>

        <center>
          <p className="mt-5">Add New Address</p>
        </center>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-10">
          <button className="border border-gray-300 rounded-md px-8 py-3">
            Back
          </button>

          <Link to="/location">
            <button className="px-8 py-3 bg-black rounded-md text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step;