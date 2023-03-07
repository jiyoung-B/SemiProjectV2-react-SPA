import React from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";
import './project2.css';
import './normalize.css';
import './main.css';
import Footer from "./components/Footer";

// localhost:3000           -> Home
// localhost:3000/stuff     -> Join
// localhost:3000/contact   -> Contact
function App() {
  return (
    <div>
        <h1>Simple SPA</h1>
        <Menu />
        <Content />
        <Footer />
    </div>
  );
}
export default App;
