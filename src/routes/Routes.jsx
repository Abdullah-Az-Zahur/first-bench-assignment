import { Routes, Route } from "react-router";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
