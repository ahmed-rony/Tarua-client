import { useCallback, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import { BASENDPOINT } from "../../../variable";

const PrivateBookingRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  const fetchBookingStatus = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        BASENDPOINT + `/show/booking-status`
      );

      if (response.data && typeof response.data.bookingEnabled === "boolean") {
        setIsAuthenticated(response.data.bookingEnabled);
      } else {
        console.warn("Invalid response format:", response.data);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(
        "Error fetching booking status:",
        error.response ? error.response.data : error.message
      );
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookingStatus();
  }, [fetchBookingStatus]);

  useEffect(() => {
    if (isAuthenticated === false) {
      alert("Booking is currently closed. Please try again later.");
    }
  }, [isAuthenticated]);

  if (loading || isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/event" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default PrivateBookingRoutes;
