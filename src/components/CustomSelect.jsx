export const CustomSelect = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  error,
  options,
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5 py-2">
      <label
        htmlFor=""
        className="text-14 w-full max-w-[280px] font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="flex w-full flex-col">
        <select
          placeholder={placeholder}
          className="text-16 placeholder:text-16 border-gray-300 text-gray-900 placeholder:text-gray-500 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={onChange}
          value={value}
          type={type}
          name={name}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
};
