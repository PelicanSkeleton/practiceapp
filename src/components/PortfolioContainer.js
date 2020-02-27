import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let displayPage;

    switch(this.state.currentPage){
      case ("About"):
        displayPage=<About />;
        break;
      case ("Blog"):
        displayPage=<Blog />;
        break;
      case ("Contact"):
        displayPage=<Contact />;
        break; 
      default:
        displayPage=<Home />;
    }

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {displayPage}
      </div>
    );
  }
}

export default PortfolioContainer;
