import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "./redux/slices/userConfigSlice";
import { Link, Route, Routes } from "react-router-dom";
import RequireUser from "./app/RequireUser";
import Home from "./app/Home";
import NotLoggedIn from "./app/NotLoggedIn";
import Auth from "./app/Auth";
import Infocollector from "./infocollector";
import { EMAIL_KEY, getItem } from "./localStorageConfig";
import Prof from "./Prof";
import UPI from "./UPIpage";
import Slot from "./Slot";
import SlotBooking from "./SlotBooking";
import Payment from "./Payment";

function App() {
  const myProfile = useSelector((s) => s.userReducer.myProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Infocollector" element={<Infocollector />} />
        <Route path="/profile" element={<Prof />} />
        <Route path="/UPI" element={<UPI />} />
        <Route path="/Slot" element={<Slot />} />
        <Route path="/slotbooking" element={<SlotBooking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      {myProfile ? (
        // Render when the user is logged in
        <Route element={<RequireUser />}>
          <Link to={`/profile/${getItem(EMAIL_KEY)}/info`}>Info</Link>
          {/* Add other routes that require the user to be logged in */}
        </Route>
      ) : (
        // Render when the user is not logged in
        <Route element={<NotLoggedIn />}>
          <Auth />
        </Route>
      )}
    </>
  );
}

export default App;
