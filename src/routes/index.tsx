import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/404";
import { Dashboard } from "../pages/Homepage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
