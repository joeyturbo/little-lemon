import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utilities/pages';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/Home/HomePage';
import Bookings from './components/pages/Bookings/Main'
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';


function App() {
  return (
    <>
    <Layout>
    <Routes>
          <Route path={pages.get('home').path} element={<HomePage />} />
          <Route 
            path={pages.get('about').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
    </>
  );
}

export default App;
