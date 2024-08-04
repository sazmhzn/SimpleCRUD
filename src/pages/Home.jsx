import HeaderBox from "../components/HeaderBox";
import FormComponent from "../components/FormComponent";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { validEmail, validNumber } from "../constants";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal",
    profilePicture: null,
  });

  const [erMessage, setErMessager] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "",
    profilePicture: null,
  });

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // Fetch country list from API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const [storedData, setStoredData] = useState([]);

  // Load stored data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("storedData");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, []);
  console.log(storedData, "saved data");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStoredData = [...storedData, user];
    setStoredData(updatedStoredData);
    localStorage.setItem("storedData", JSON.stringify(updatedStoredData));

    // Reset form after submission
    setUser({
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "Nepal",
    });
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Perform validation checks and update error state
    if (name === "name" && value.length < 3) {
      setErMessager((prevState) => ({
        ...prevState,
        name: "Name must be at least 3 characters long.",
      }));
    } else if (name === "email" && !validEmail(value)) {
      setErMessager((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address.",
      }));
    } else if (name === "phoneNumber" && value.length < 7) {
      setErMessager((prevState) => ({
        ...prevState,
        phoneNumber: "Number must be at least 7 characters long.",
      }));
      if (!validNumber(value)) {
        setErMessager((prevState) => ({
          ...prevState,
          phoneNumber: "Number must be in number",
        }));
      }
    } else {
      setErMessager((prevState) => ({
        ...prevState,
        [name]: " ", // Reset error message
      }));
    }
  };

  return (
    <section className="no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12;">
      <HeaderBox
        title="User data"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5 min-h-[90vh]">
        {/* <PaymentTransferForm /> */}
        <FormComponent
          handleSubmit={handleSubmit}
          erMessage={erMessage}
          setErMessager={setErMessager}
          user={user}
          setUser={setUser}
          handleUserInput={handleUserInput}
          countries={countries}
        />
        <Table savedData={savedData} />
      </section>
    </section>
  );
};

export default Home;
