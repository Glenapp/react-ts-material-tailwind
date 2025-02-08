import { Route } from 'react-router-dom';
import { Home, Layout } from '../views/public-views';

const publicRoutes = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} /> */}
  </Route>
);

export default publicRoutes;
