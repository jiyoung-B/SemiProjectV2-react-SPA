import React from "react";
import Content from "./components/pages/Content";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// localhost:3000           -> Home
// localhost:3000/stuff     -> Join
// localhost:3000/contact   -> Contact
function App() {
  return (
    <div>
        <h1>Simple SPA</h1>
        <Header />
        <Content />
        <Footer />
    </div>
  );
}
export default App;
