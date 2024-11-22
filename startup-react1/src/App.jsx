import React from "react";
import Header from "./components/Header";
import ImageScrollbar from "./components/ImageScrollbar";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <ImageScrollbar />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
