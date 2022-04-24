import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Layout from "./components/Layout/Layout";
import Login from "./Pages/Login";
import User from "./Pages/User";
import "./App.css";

import { UserData } from "./Pages/User";

function App() {
  const initialState: UserData = {
    userEmail: "",
    userPassword: "",
  };
  const [data, setData] = useState(initialState);

  useEffect(() => {
    //to use async and await methods we have to follow this way
    (async () => {
      const response = await fetch("http://localhost:64763/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      setData(data);
    })();
  }, []);

  return (
    <Layout data={data}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/user" element={() => <User data={data} />}></Route>
        {/* wild card routing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
