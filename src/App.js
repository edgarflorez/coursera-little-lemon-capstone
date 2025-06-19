import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { ConfirmedBooking } from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route
            path="/booking-confirmation"
            element={<ConfirmedBooking />}
          ></Route>
        </Routes>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
