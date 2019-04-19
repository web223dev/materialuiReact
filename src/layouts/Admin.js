import React, { Component } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

import routes from 'routes.js';
import image from 'assets/img/sidebar-2.jpg';
import logo from "assets/img/reactlogo.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "blue",
      mobileOpen: false
    }
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }

  render() {
    const { image, color, mobileOpen } = this.state;
    const { handleDrawerToggle } = this;
    return (
      <div>
        <Sidebar
          routes={routes}
          logoText={"web223dev"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
        />
        <div>

        </div>
      </div>
    );
  }
}

export default Dashboard;