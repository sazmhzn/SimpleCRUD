import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/theme/Layout";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
