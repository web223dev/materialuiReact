import React from 'react';

const Sidebar = ({...props}) => {
  const { color, logo, logoText, image, routes } = props;
  return (
    <div>
      <Hidden mdUp implementation="css"></Hidden>
      <Hidden smDown implementation="css"></Hidden>
    </div>
  );
};

export default Sidebar;