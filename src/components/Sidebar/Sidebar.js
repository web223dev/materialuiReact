import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
//@Material-ui core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
// core components
import AdminNavbarLinks from 'components/Navbars/AdminNavbarLinks';

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle";

const Sidebar = ({ ...props }) => {
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, color, logo, logoText, image, routes, handleDrawerToggle } = props;

  var brand = (
    <div className={classes.logo}>
      <a href="https://github.com/web223dev" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img className={classes.img} src={logo} alt="logo" />
        </div>
        {logoText}
      </a>
    </div>
  );
  var links = (
    <List className={classes.list}>
      {
        routes.map((prop, key) => {
          var activePro = " ";
          var listItemClasses;
          if (prop.path === '/upgrade-to-pro') {
            activePro = classes.activePro + " ";
            listItemClasses = classNames({
              [" " + classes[color]]: true
            })
          } else {
            listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path)
            })
          }
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
          });
          return (
            <NavLink
              to={prop.layout + prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon className={classNames(classes.itemIcon, whiteFontClasses)}>{prop.icon}</Icon>
                ) : (
                    <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
                  )}
                <ListItemText
                  primary={prop.name}
                  disableTypography={true}
                  className={classNames(classes.itemText, whiteFontClasses)}
                />
              </ListItem>
            </NavLink>
          )
        })
      }
    </List>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
          {
            image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null
          }
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          anchor="left"
          open={props.open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default withStyles(sidebarStyle)(Sidebar);