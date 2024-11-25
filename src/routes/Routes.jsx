import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/MainLayout';
import Login from "../components/Login";
import List from "../components/List";
import InsuranceForm from "../components/InsuranceForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/insuranceForm",
        element: <InsuranceForm />,
      },
    ],
  },
]);
export default router;
