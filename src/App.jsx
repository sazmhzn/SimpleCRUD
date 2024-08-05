import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/theme/Layout";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="EditUser/:id" element={<Home />} />
            <Route path="Profile" element={<Profiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
