import HeaderBox from "./HeaderBox";

const Table = ({ savedData }) => {
  return (
    <div className="overflow-x-auto">
      <HeaderBox title="User details" subtext="All the user Details" />
      <table className="w-full table-auto">
        <thead>
          <tr className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
            <th className="w-1/12py-2">id</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Contact</th>
            <th className="py-2">D.O.B</th>
            <th className="py-2 text-right max-md:hidden">Action</th>
          </tr>
        </thead>
        <tbody className="bg-black-1">
          {savedData && "e"}
          {/* {savedData &&
            savedData.map((data) => (
              <tr
                key={data.data}
                className="h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
              >
                <td className="py-2 text-center">{data.name}</td>
                <td className="py-2 text-center">{data.address}</td>
                <td className="py-2 text-centerbg-blue-400">{data.city}</td>
                <td className="py-2 text-center">{data.district}</td>
                <td className="py-2 text-right">{data.dob}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
