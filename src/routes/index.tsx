import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import PublicRoutes from './public';
// import UserRoutes from "./userRoutes";
// import AdminRoutes from "./adminRoutes";
// import Github, { githubInfoLoader } from "../pages/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PublicRoutes}
      {/* {UserRoutes}
      {AdminRoutes}
      <Route loader={githubInfoLoader} path="/github" element={<Github />} /> */}
    </>,
  ),
);
export default router;
