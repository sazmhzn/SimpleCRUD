import HeaderBox from "../components/HeaderBox";
import FormComponent from "../components/FormComponent";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { validEmail, validNumber } from "../constants";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import { header } from "../constants/common";
import { getData, searchById, upsertData } from "../service/StorageService";

const Home = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal",
    profilePicture: "",
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
    profilePicture: "",
  });

  const [countries, setCountries] = useState([]);
  const [storedData, setStoredData] = useState([]);

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

  useEffect(() => {
    const data = getData();
    setStoredData(data);
  }, [id]);

  const validateForm = () => {
    let isValid = true;
    const errorMessage = { ...erMessage };

    if (user.name === "") {
      errorMessage.name = "Please enter your username.";
      isValid = false;
    } else {
      errorMessage.name = "";
    }
    if (user.phoneNumber === "") {
      errorMessage.phoneNumber = "Please enter your password.";
      isValid = false;
    } else {
      errorMessage.phoneNumber = "";
    }

    if (user.email === "") {
      errorMessage.email = "Please enter your Email.";
      isValid = false;
    } else if (!validEmail(user.email)) {
      errorMessage.email = "Please enter a valid eamil";
      isValid = false;
    } else {
      errorMessage.email = "";
    }

    setErMessager(errorMessage);
    console.log(isValid);

    return isValid;
  };

  // Handle delete
  const handleDelete = (id) => {
    console.log(id);
    const updatedStoredData = storedData.filter((item) => item.id !== id);
    setStoredData(updatedStoredData);
    localStorage.setItem("storedData", JSON.stringify(updatedStoredData));
  };

  useEffect(() => {
    if (!id) {
      // Clear user data if there's no userId
      setUser({
        id: "",
        name: "",
        email: "",
        phoneNumber: "",
        dob: "",
        city: "",
        district: "",
        province: "",
        country: "Nepal",
        profilePicture: "",
      });
      // console.log("No userId provided, clearing user data");
    } else {
      const foundUser = searchById(id);
      if (foundUser) {
        setUser(foundUser);
      } else {
        // console.error("User not found");
        setUser(null); // Clear user data if no user is found with the provided ID
      }
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const item = {
        ...user,
        id: id || uuidv4(),
      };

      console.log(item, "user data");
      upsertData(item);
      setStoredData(getData());
    } else {
      toast.error("🦄 Wow it did not save", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // Reset form after submission
    setUser({
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "Nepal",
      profilePicture: "",
    });
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Perform real time validation checks and update error state
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
        [name]: "", // Reset error message
      }));
    }
  };

  return (
    <section className="w-full no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12;">
      <div
        className="text-[12px] font-semibold text-slate-500 mb-6"
        aria-labelledby="breadcrumb"
      >
        <Link to={"/"}>Add User</Link>
        {id && <Link> - Edit User</Link>}
      </div>
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
          id={id}
        />
        <Table
          storedData={storedData}
          header={header}
          handleDelete={handleDelete}
        />
        <button
          type="submit"
          className="text-16 my-4 border border-bankGradient bg-bank-gradient  text-white shadow-form h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors "
        >
          Profiles
        </button>
      </section>
    </section>
  );
};

export default Home;
