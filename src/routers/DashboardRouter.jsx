import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Header
import { HeaderNavBar } from "../components/Header/Header";
// Components
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage.jsx";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const DashboardRouter = () => {
  return (
    <>
      {/* Header Design */}
      <HeaderNavBar />

      <div className='m-5'>
        {/* Routing */}
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/dc" component={DcPage} />
          <Route path="/hero/:heroId" component={HeroPage} />
          
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
