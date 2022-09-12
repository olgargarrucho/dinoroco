import { useState, useEffect } from "react";
import "../styles/App.scss";
import getDataApi from "../services/dataAPI";
import ls from "../services/localStoraged";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutMore from "./AboutMore";
import Contact from "./Contact";

function App() {
  const [dataContact, setDataContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (name, value) => {
    setDataContact({
      ...dataContact,
      [name]: value,
    });
  };

  const handleResset = () => {
    setDataContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <body className="body">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutus" element={<AboutMore />} />
          <Route
            path="/contact"
            element={
              <Contact
                dataContact={dataContact}
                handleInput={handleInput}
                handleResset={handleResset}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </body>
  );
}

export default App;
