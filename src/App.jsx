import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Header />

        <div className="row g-0">
          <div className="col-12 col-md-3">
            <Sidebar />
          </div>
          <div className="col-12 col-md-9">
            <Content />
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
