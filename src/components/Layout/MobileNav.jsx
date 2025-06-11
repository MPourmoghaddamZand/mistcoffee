import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle, HiViewGrid } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useNavbarContext } from "../../context/NavbarProvider";

const navMenu = [
  { name: "خانه", path: "/menu", icon: <FaHome size={30} /> },
  { name: "سفارش ها", path: "/orders", icon: <HiViewGrid size={30} /> },
  {
    name: "درباره ما",
    path: "/about",
    icon: <HiInformationCircle size={30} />,
  },
  { name: "پروفایل", path: "/profile", icon: <CgProfile size={30} /> },
];

const MobileNav = () => {
  const { navActive, setNavActive } = useNavbarContext();
  if (!navActive) return null;

  const location = useLocation();
  const [active, setActive] = useState(0);
  const [circlePos, setCirclePos] = useState(0);
  const itemRefs = useRef([]);

  // به‌روزرسانی ایندکس فعال با توجه به آدرس
  useEffect(() => {
    const index = navMenu.findIndex((item) => item.path === location.pathname);
    if (index !== -1) {
      setActive(index);
    }
  }, [location.pathname]);

  // محاسبه مکان دایره
  useEffect(() => {
    const timeout = setTimeout(() => {
      const activeItem = itemRefs.current[active];
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect();
        const parentRect = activeItem.parentElement.getBoundingClientRect();
        const left = rect.left - parentRect.left + rect.width / 2 - 24;
        setCirclePos(left);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [active, window.innerWidth]);

  return (
    <>
      <div className="fixed bottom-5 h-16 w-full flex justify-center items-center z-[999]">
        <div className="bg-myhardbrown h-full w-10/12 shadow py-3 rounded-[20px] relative border-[4px] border-mysecondary">
          <ul className="flex justify-evenly items-center relative z-10">
            <div
              className="absolute -translate-y-[37px] w-12 h-12 bg-mysecondary rounded-full transition-all duration-300 ease-in-out"
              style={{ left: `${circlePos}px` }}
            />
            {navMenu.map((item, index) => (
              <li
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="text-white text-lg flex flex-col items-center cursor-pointer relative"
                onClick={() => setActive(index)}
              >
                <Link to={item.path} className="flex flex-col items-center">
                  <div
                    className={`transition-all duration-500 ${active === index ? "-translate-y-7" : ""
                      }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`transition-all duration-300 font-[iransans] font-thin text-sm ${active === index
                      ? "opacity-100 -translate-y-4"
                      : "opacity-0 translate-y-5"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
