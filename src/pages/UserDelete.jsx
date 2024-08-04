import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDelete = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const savedData = localStorage.getItem("storedData");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, [id]);

    // Handle delete
    const handleDelete = (id) => {
      const updatedStoredData = storedData.filter((item) => item.id !== id);
      setStoredData(updatedStoredData);
      localStorage.setItem("storedData", JSON.stringify(updatedStoredData));
    };

  const handleDeleteUser = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      
      .then((res) => {
        showDanger("User deleted successfully")
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    }
  };
  return  <>
  <h1>Are you sure you want to delete this?</h1>
  <div>Username: {user.username}</div>
  <div>Email: {user.email}</div>
  <div>Age: {user.age}</div>
  <div>City: {user.city}</div>
  <div className="button-group">
    <button
      type="button"
      className="delete"
      onClick={() => {
        navigate("/userManagement");
      }}
    >
      No
    </button>

    <button type="button" onClick={handleDeleteUser}>
      Yes
    </button>
  </div>
  {/* <ToastContainer /> */}
</>
};

export default UserDelete;
