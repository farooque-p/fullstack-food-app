import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const backendUrl = "http://192.168.0.103:4000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add backendUrl={backendUrl} />} />
          <Route path="/list" element={<List backendUrl={backendUrl} />} />
          <Route path="/orders" element={<Orders backendUrl={backendUrl} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;