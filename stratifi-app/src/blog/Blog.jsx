import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class BlogHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="h-[75%]"></div>
        <Footer />
      </div>
    );
  }
}

export default BlogHome;
