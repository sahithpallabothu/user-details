import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Layout from "./components/Layout/Layout";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* wild card routing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
