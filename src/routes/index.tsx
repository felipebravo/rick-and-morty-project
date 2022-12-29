import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/404";
import { Homepage } from "../pages/Homepage";
import { MainLocations } from "../pages/Locations";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/locations" element={<MainLocations />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
