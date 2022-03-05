import React from "react";

import { Route, Routes as Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { IUSer } from "./interfaces/Users";
import { IStore } from "./interfaces/Store";

const Routes: React.FC = () => {
  const users: IUSer = useSelector((state: IStore) => state.users);

  return (
    <Switch>
      {users.logged ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Switch>
  );
};

export default Routes;
