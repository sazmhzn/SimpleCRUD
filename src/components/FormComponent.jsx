import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
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
  return <div>FormComponent</div>;
};

export default FormComponent;
