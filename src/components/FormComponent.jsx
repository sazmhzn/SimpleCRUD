import CustomInput from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { provinces } from "../constants/common";
import CustomFileInput from "./CustomFileInput";

const FormComponent = ({
  user,
  erMessage,
  countries,
  handleSubmit,
  handleUserInput,
  id,
}) => {
  return (
    <form method="POST" className="mx-auto">
      <CustomFileInput
        type="file"
        name="profilePicture"
        label="Profile Picture"
        value={user.profilePicture}
        placeholder="Enter Name"
        onChange={handleUserInput}
        error={erMessage.profilePicture}
      />

      <CustomInput
        type="text"
        name="name"
        label="Name"
        value={user.name}
        placeholder="Enter Name"
        onChange={handleUserInput}
        error={erMessage.name}
        required={true}
      />
      <CustomInput
        type="email"
        name="email"
        label="Email"
        value={user.email}
        placeholder="eg: example@mail.com"
        onChange={handleUserInput}
        error={erMessage.email}
        required={true}
      />

      <div className="flex items-center justify-center gap-4">
        <CustomInput
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          value={user.phoneNumber}
          placeholder="98X XXX XXXX"
          onChange={handleUserInput}
          error={erMessage.phoneNumber}
          required={true}
        />
        <CustomInput
          type="date"
          name="dob"
          label="Date of Birth"
          value={user.dob}
          placeholder="Enter "
          onChange={handleUserInput}
          error={erMessage.dob}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <CustomInput
          type="text"
          name="city"
          label="City"
          value={user.city}
          placeholder="eg: Lalitput, Kathmandu, ..."
          onChange={handleUserInput}
          error={erMessage.city}
        />
        <CustomInput
          type="text"
          name="district"
          label="District"
          value={user.district}
          placeholder="eg: Kathmandu, Lalitpur, ... "
          onChange={handleUserInput}
          error={erMessage.district}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <CustomSelect
          type="select"
          name="province"
          label="Province"
          value={user.province}
          options={provinces}
          placeholder="eg: Province 1"
          onChange={handleUserInput}
          error={erMessage.province}
        />

        <CustomSelect
          type="text"
          name="country"
          label="Country"
          value={user.country}
          options={countries}
          placeholder="Enter "
          onChange={handleUserInput}
          error={erMessage.country}
        />
      </div>

      <button
        type="submit"
        className="text-16 my-4 border border-bankGradient bg-bank-gradient  text-white shadow-form h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors "
        onClick={handleSubmit}
      >
        {id ? "Edit" : "Submit"}
      </button>
    </form>
  );
};

export default FormComponent;
