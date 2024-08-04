import { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { provinces } from "../constants/common";
import CustomFileInput from "./CustomFileInput";
import { validEmail, validNumber } from "../constants/index";

const FormComponent = ({
  user,
  setUser,
  erMessage,
  setErMessager,
  countries,
  setCountries,
  handleSubmit,
  handleUserInput,
}) => {
  // const [countries, setCountries] = useState([]);
  // useEffect(() => {
  //   // Fetch country list from API
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const countryNames = data.map((country) => country.name.common);
  //       setCountries(countryNames);
  //     })
  //     .catch((error) => console.error("Error fetching countries:", error));
  // }, []);

  // // const handleUserInput = (e) => {
  // //   const { name, value } = e.target;
  // //   setUser({ ...user, [name]: value });
  // //   // Perform validation checks and update error state
  // //   if (name === "name" && value.length < 3) {
  // //     setErMessager((prevState) => ({
  // //       ...prevState,
  // //       name: "Name must be at least 3 characters long.",
  // //     }));
  // //   } else if (name === "email" && !validEmail(value)) {
  // //     setErMessager((prevState) => ({
  // //       ...prevState,
  // //       email: "Please enter a valid email address.",
  // //     }));
  // //   } else if (name === "phoneNumber" && value.length < 7) {
  // //     setErMessager((prevState) => ({
  // //       ...prevState,
  // //       phoneNumber: "Number must be at least 7 characters long.",
  // //     }));
  // //     if (!validNumber(value)) {
  // //       setErMessager((prevState) => ({
  // //         ...prevState,
  // //         phoneNumber: "Number must be in number",
  // //       }));
  // //     }
  // //   } else {
  // //     setErMessager((prevState) => ({
  // //       ...prevState,
  // //       [name]: " ", // Reset error message
  // //     }));
  // //   }
  // // };

  // const [storedData, setStoredData] = useState([]);

  // // Load stored data from localStorage when component mounts
  // useEffect(() => {
  //   const savedData = localStorage.getItem("storedData");
  //   if (savedData) {
  //     setStoredData(JSON.parse(savedData));
  //   }
  //   console.log(savedData, "saved data");
  // }, []);

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const updatedStoredData = [...storedData, user];
  //   setStoredData(updatedStoredData);
  //   localStorage.setItem("storedData", JSON.stringify(updatedStoredData));

  //   // Reset form after submission
  //   setUser({
  //     name: "",
  //     email: "",
  //     phoneNumber: "",
  //     dob: "",
  //     city: "",
  //     district: "",
  //     province: "",
  //     country: "Nepal",
  //   });
  // };

  return (
    <form className="mx-auto">
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
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
