const CustomInput = ({ name, label, placeholder, value, onChange, error }) => {
  return (
    <div className="form-item">
      <label htmlFor="" className="form-label">
        {label}
      </label>
      <div className="flex w-full flex-col">
        <input
          placeholder={placeholder}
          className="itext-16 placeholder:text-16 border-gray-300 text-gray-900 placeholder:text-gray-500 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={onChange}
          value={value}
          type={name === "password" ? "password" : "text"}
          name={name}
        />
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
};

export default CustomInput;
