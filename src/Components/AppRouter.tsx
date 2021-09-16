import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const auth = true;
  return auth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key = {route.path}
        />
      ))}
    </Switch>
  ) : (
    <Switch>
        {publicRoutes.map((route) => (
        <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
        key = {route.path}
      />
      ))}
    </Switch>
  );
};

export default AppRouter;
