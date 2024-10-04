import React, { Suspense, useEffect } from "react";
import {
  Route,
  Routes as Router,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

import MainLayout from "../layout/Main";

import { PATH, publicRoutes } from "../constants/paths";

const helmetContext = {};

export const Routes = () => {
  return (
    <BrowserRouter>
          <Router>
            {publicRoutes.map((route, index) => {
              const Layout = route?.layout || MainLayout;
              const Page = route?.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Router>
    </BrowserRouter>
  );
};