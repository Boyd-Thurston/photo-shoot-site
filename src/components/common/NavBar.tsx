import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface Props {
  currentTab: string | number
};

/**Reusable component providing the top nav bar for each page.*/
const NavBar = ({currentTab}:Props) => {

  const history = useHistory();

  const handleNavSeclection = (event:any, newValue:string) => {
    if (newValue === "home") {
      history.push("/")
    } else {
      history.push(`/${newValue}`)
    };
  };

  return (
    <AppBar position="fixed" color="primary">
      <Tabs
        value={currentTab}
        onChange={handleNavSeclection}
      >
        <Tab label="home" value="home" />
        <Tab label="gallery" value="gallery"/>
        <Tab label="about" value="about" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
