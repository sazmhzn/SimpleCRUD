import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { getData } from "../service/StorageService";
import { header } from "../constants/common";
import Loader from "../components/Loader";

const Profiles = () => {
  const [storedData, setStoredData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const data = getData();
    setStoredData(data);
    setLoading(false);
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    console.log(id);
    const updatedStoredData = storedData.filter((item) => item.id !== id);
    setStoredData(updatedStoredData);
    localStorage.setItem("storedData", JSON.stringify(updatedStoredData));
  };

  if (loading) {
    return <Loader />; // Show loading indicator while data is loading
  }

  return (
    <section className="w-full no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12;">
      <div
        className="text-[12px] font-semibold text-slate-500 mb-6"
        aria-labelledby="breadcrumb"
      >
        <Link to={"/"} className="underline hover:text-primaryGradient">
          Add User
        </Link>
        <Link> - Profile</Link>
      </div>

      <Table
        storedData={storedData}
        header={header}
        handleDelete={handleDelete}
        pagination={false}
      />
    </section>
  );
};

export default Profiles;
