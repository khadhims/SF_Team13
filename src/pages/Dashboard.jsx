import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { RiFileListFill } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import LogoB from "../assets/LogoB.png";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const Menus = [
    { title: "Home", icon: <IoHomeSharp /> },
    { title: "New Booking", icon: <RiAddCircleFill /> },
    { title: "View Booking", icon: <RiFileListFill /> },
    { title: "Feedbacks", icon: <MdFeedback /> },
    { title: "Logout", icon: <IoLogOutSharp /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-primary h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-primary text-3xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Sidebar Header */}
        <div className="flex items-center">
          <FaBus
            className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open ? "rotate-[360deg]" : ""
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 mt-1 ${
              !open && "hidden"
            }`}
          >
            Dashboard
          </h1>
        </div>

        {/* Search Input */}
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <BsSearch
            className={`text-white text-lg block cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        {/* Sidebar Menus */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-200
                ${
                  selectedIndex === index
                    ? "bg-white bg-opacity-30"
                    : "hover:bg-white hover:bg-opacity-20"
                }
                ${menu.spacing ? "mt-9" : "mt-2"}`}
            >
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-7 flex-1">
        <img src={LogoB} alt="LogoB" className="h-12 duration-300" />

        {/* Panduan Membeli Tiket */}
        <div className="mt-6 shadow-lg border border-gray-300 rounded-lg">
          <div className="bg-primary text-white font-bold py-4 px-4 rounded-t-lg">
            === PERHATIAN ===
          </div>
        </div>
        <div className="bg-white p-4 rounded-b-lg">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Anda dapat melihat daftar jadwal dengan mengklik &quot;New Booking&quot;.
              Sistem akan menampilkan daftar jadwal yang tersedia untuk Anda
              yang dapat dilihat dan dipesan.
            </li>
            <li>
              Sebelum pemesanan Anda disimpan, Anda akan diarahkan untuk
              melakukan pembayaran.
            </li>
            <li>
              Setelah pembayaran berhasil, sistem akan menghasilkan ID tiket
              Anda yang harus dibawa ke stasiun.
            </li>
            <li>
              Anda dapat melihat semua riwayat pemesanan Anda dengan mengklik
              &quot;View Booking&quot; dan memberikan Feedback.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
