const Pagination = ({
  totalPage,
  currentPage,
  changePage,
  nextPage,
  previousPage,
}) => {
  return (
    <div className="flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
      <div className="flex">
        <ul
          className="flex justify-center items-center gap-x-[10px] z-30"
          role="navigation"
          aria-label="Pagination"
        >
          <li
            className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
              currentPage === 0
                ? "bg-[#cccccc] pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={previousPage}
          >
            <img
              src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg"
              alt="Previous"
            />
          </li>
          {Array.from({ length: totalPage }, (_, index) => (
            <li
              key={index}
              className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                currentPage === index
                  ? "text-blue-600 border-sky-500"
                  : "border-[#E4E4EB]"
              }`}
              onClick={() => changePage(index)}
            >
              {index + 1}
            </li>
          ))}
          <li
            className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
              currentPage === totalPage - 1
                ? "bg-[#cccccc] pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={nextPage}
          >
            <img
              src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg"
              alt="Next"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
