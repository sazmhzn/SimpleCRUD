const LOCAL_STORAGE_KEY = "storedData";

// Function to get data from local storage
export const getData = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Function to save data to local storage
export const saveData = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

// Function to delete data from local storage by ID
export const deleteDataById = (id) => {
  const storedData = getData();
  const updatedData = storedData.filter((item) => item.id !== id);
  saveData(updatedData);
};

// Function to add or update data in local storage
export const upsertData = (item) => {
  const storedData = getData();
  console.log(storedData);
  const existingItemIndex = storedData.findIndex((data) => data.id === item.id);
  console.log(existingItemIndex);
  if (existingItemIndex >= 0) {
    // Update existing item
    console.log("updating");
    console.log(storedData);
    storedData[existingItemIndex] = item;
  } else {
    // Add new item
    console.log("Adding");
    storedData.push(item);
  }

  saveData(storedData);
};

// Function to search for a user by ID
export const searchById = (id) => {
  const storedData = getData();
  return storedData.find((item) => item.id === id);
};
