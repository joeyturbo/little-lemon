
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/Home/HomePage';
import BookingPage from './components/pages/Booking/BookingPage';


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
