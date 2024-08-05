import { Link } from "react-router-dom";
import HeaderBox from "./HeaderBox";
import { useMemo, useState } from "react";
import Pagination from "./Pagination";
import CustomInput from "./CustomInput";

const Table = ({ storedData, handleDelete }) => {
  const rowsLimit = 5;
  const totalPage = Math.ceil(storedData.length / rowsLimit);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter rows based on the search query
  const filteredData = useMemo(() => {
    return storedData.filter((data) => {
      return (
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.phoneNumber.includes(searchQuery) ||
        data.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery, storedData]);

  // Calculate the rows to show based on current page and search results
  const rowsToShow = useMemo(() => {
    const startIndex = currentPage * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData]);

  const nextPage = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (value) => {
    setCurrentPage(value);
  };

  // Update search query on input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0); // Reset to first page on search
  };
  return (
    <div className="overflow-x-auto">
      <HeaderBox title="User details" subtext="All the user Details" />
      <div className="w-1/2">
        <CustomInput
          placeholder="Type to search"
          value={searchQuery}
          onChange={handleSearch}
        />
        {/* <CustomSelect /> */}
      </div>

      <div className="flex-auto block py-8 pt-6 px-0 ">
        <div className="">
          <table className="w-full my-0 align-middle text-dark border-neutral-200">
            <thead className=" bg-neutral-300 px-2">
              <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                <th className="p-3 text-start min-w-[15px]">ID</th>
                <th className="py-3 text-start min-w-[90px]">Name</th>
                <th className="py-3 text-start min-w-[100px]">Email</th>
                <th className="py-3 pr-12 text-start min-w-[100px]">Phone</th>
                <th className="py-3 pr-12 text-start min-w-[90px]">City</th>
                <th className="py-3 text-start min-w-[100px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {rowsToShow.length > 0 ? (
                rowsToShow.map((data) => (
                  <tr
                    key={data.id}
                    className="border-b border-dashed last:border-b-0"
                  >
                    <td className="p-3 pl-0">
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                          <img
                            src={data.profilePicture || "user.png"}
                            className="w-[32px] h-[32px] inline-block shrink-0 rounded-2xl aspect-square"
                            alt="profile"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-0 pr-0 text-start sm:text-sm">
                      <span className=" text-light-inverse text-md/normal">
                        {data.name}
                      </span>
                    </td>
                    <td className="p-0 pr-4 text-start sm:text-sm">
                      <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg">
                        {data.email}
                      </span>
                    </td>
                    <td className="p-0 pr-10 text-start sm:text-sm">
                      <span className="text-left align-baseline inline-flex px-0 py-3 items-center text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                        {data.phoneNumber}
                      </span>
                    </td>
                    <td className="pr-0 text-start sm:text-sm">
                      <span className=" text-light-inverse text-md/normal">
                        {data.city.length > 0 ? data.city : "-"}
                      </span>
                    </td>
                    <td className="py-3 pr-0 text-start flex gap-4 sm:text-sm">
                      <Link
                        onClick={() => handleDelete(data.id)}
                        className="w-fit gap-2 relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center py-4"
                      >
                        <span className="text-red-600 flex items-center justify-center leading-none shrink-0 ">
                          delete
                        </span>
                      </Link>
                      <Link
                        to={`/EditUser/${data.id}`}
                        className="w-fit gap-2 relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center py-3"
                      >
                        <span className="text-blue-400 flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                          edit
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-3">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
        <div className="text-sm text-neutral-400">
          Showing {currentPage * rowsLimit + 1} to{" "}
          {Math.min((currentPage + 1) * rowsLimit, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          changePage={changePage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};

export default Table;
