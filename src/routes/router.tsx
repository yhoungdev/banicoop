/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "../pages/auth/sign_in";
import Home from "../pages/dashboard/home/home";
import CustomersPage from "../pages/dashboard/customers";
import TransactionsPage from "../pages/dashboard/transactions";
import CellsPage from "../pages/dashboard/cells";

const RouteContainer = () => {
  const routes = [
    {
      title: "home",
      path: "/",
      component: <Home />,
    },
    {
      title: "customers",
      path: "/dashboard/customers",
      component: <CustomersPage />,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      component: <TransactionsPage />,
    },
    {
      title: "Cells",
      path: "/dashboard/cells",
      component: <CellsPage />,
    },
  ];

  return (
    <Router>
      <Routes>
        {localStorage.getItem("_authToken") ? (
          <>
            {routes.map((items, key) => (
              <Route key={key} path={items.path} element={items.component} />
            ))}
          </>
        ) : (
          <Route path="/" element={<SignIn />} />
        )}
      </Routes>
    </Router>
  );
};
export default RouteContainer;
