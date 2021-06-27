import React from "react";
import { Redirect, Route } from "react-router";

const groupRoutes = (routes = [], isStrict = false) => {
  return routes.map((route, i) => {
    const Component = route.component;
    return (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        render={props => {
          if (!isStrict || route.guardResult.isAllow) {
            return <Component {...props} {...route.data} />;
          }

          return <Redirect to={route.guardResult.redirect || ""} />;
        }}
      />
    );
  });
};

export { groupRoutes };
