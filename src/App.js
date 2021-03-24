import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Nav';
import BannerLayout from './containers/BannerLayout';
import HeartyFaves from './containers/HeartyFaves/HeartyFaves';
import recipes from './data/recipes.js';
import React, { useState } from "react";


const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Nav placeholder="Search Recipes ..." setSearch={setSearch}/>
      <HeartyFaves recipes={recipes}/>
      <BannerLayout />
    </>
  );
};

export default App;
