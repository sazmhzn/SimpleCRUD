import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { getData } from "../service/StorageService";
import { header } from "../constants/common";

const Profiles = () => {
  const [storedData, setStoredData] = useState([]);
  useEffect(() => {
    const data = getData();
    setStoredData(data);
  }, []);

  return (
    <section className="w-full no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12;">
      <div
        className="text-[12px] font-semibold text-slate-500 mb-6"
        aria-labelledby="breadcrumb"
      >
        <Link to={"/"}>Add User</Link>
        <Link> - Profile</Link>
      </div>

      <Table
        storedData={storedData}
        header={header}
        // handleDelete={handleDelete}
      />
    </section>
  );
};

export default Profiles;
