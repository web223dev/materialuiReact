import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
//beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import "perfect-scrollbar/css/perfect-scrollbar.css";
// MaterialUI core component
import withStyles from "@material-ui/core/styles/withStyles";
//core components
import Navbar from 'components/Navbars/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import routes from 'routes.js';
import image from 'assets/img/sidebar-2.jpg';
import logo from "assets/img/reactlogo.png";
import dashbaordStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

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
  getRoute() {
    return this.props.location.pathname !== "/admin/maps";
  }
  resizeFunction = () => {
    if(window.innerWidth >=960){
      this.setState({mobileOpen: false})
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
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
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(dashbaordStyle)(Dashboard);