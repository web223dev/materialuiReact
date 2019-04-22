import React from 'react';
import { NavLink } from 'react-router-dom';
//@Material-ui core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle";

const Sidebar = ({ ...props }) => {
  const { classes, color, logo, logoText, image, routes, open, handleDrawerToggle } = props;
  
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
          console.log(prop.layout + prop.path);
          return (
            <NavLink
              to={prop.layout + prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                    <prop.icon />
                  )}
                <ListItemText
                  primary={prop.name}
                  disableTypography={true}
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
          anchor="left"
          open
          onClose={handleDrawerToggle}
          ModalProps={{ Keepmounted: true }}
          className={classes.drawerPaper}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
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
      <Hidden smDown implementation="css"></Hidden>
    </div>
  );
};

export default withStyles(sidebarStyle)(Sidebar);