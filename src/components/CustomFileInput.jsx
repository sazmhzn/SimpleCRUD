import React from "react";

const CustomFileInput = ({
  name,
  type = "file",
  label,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex bg-gray-200 rounded-md border-dashed-2 p-2 border-gray-500 flex-col gap-2 items-center place-items-center justify-center">
      <label
        title="Click to upload"
        htmlFor="button2"
        className="flex flex-col items-center text-14 max-w-[280px] font-medium text-gray-700"
      >
        <img
          className="w-12"
          src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
          alt="file upload icon"
          width="512"
          height="512"
        />
        {label}
      </label>
      <input
        type={type}
        accept="image/png"
        name="button2"
        id="button2"
        className="border-gray-400/60 bg-gray-300 hover:border-gray-300 group abefore:inset-0 before:rounded-xl before:borderborder-dashed active:duration-75"
      />
    </div>
  );
};

export default CustomFileInput;
