import React, { Component } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
// MaterialUI core component
import withStyles from "@material-ui/core/styles/withStyles";
//core components
import routes from 'routes.js';
import image from 'assets/img/sidebar-2.jpg';
import logo from "assets/img/reactlogo.png";
import dashbaordStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle';

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
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"web223dev"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">

        </div>
      </div>
    );
  }
}

export default withStyles(dashbaordStyle)(Dashboard);