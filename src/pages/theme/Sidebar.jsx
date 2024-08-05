import { useState } from "react";
import { sidebarLinks } from "../../constants/common";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer flex items-center gap-2">
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1">
            CRUD
          </h1>
        </Link>
        {/* <Link>HEllo</Link> */}

        {sidebarLinks.length > 0
          ? sidebarLinks.map((item, index) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);

              return (
                <Link
                  to={item.route}
                  key={`${item} - ${index}`}
                  className={`${
                    isActive && "bg-primaryGradient"
                  } flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start
                  `}
                  onClick={() => {
                    setPathname(item.route);
                  }}
                >
                  <div className="">
                    <div className="w-4 h-4 bg-slate-50" />
                  </div>
                  <p
                    className={
                      isActive
                        ? "text-white"
                        : "text-16 font-semibold text-black-2"
                    }
                  >
                    {item.label}
                  </p>
                </Link>
              );
            })
          : "No Links found!!"}
      </nav>
    </section>
  );
};

export default Sidebar;
