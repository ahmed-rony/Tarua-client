import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { BASENDPOINT } from "../../../../variable";

function getMonth(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { month: "short" }); // "Feb"
}

function getDateNum(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { day: "2-digit" }); // "15"
}
function getShortYear(dateString) {
  const year = new Date(dateString).getFullYear(); // Extract full year (e.g., 2025)
  return year.toString().slice(-2); // Return last two digits of the year
}

const Bookings = () => {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingEnabled, setBookingEnabled] = useState(null);

  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        BASENDPOINT + `/booking/running`
      );
      if (response.data && Array.isArray(response.data.bookings)) {
        setBookings(response.data.bookings);
      } else {
        console.warn("Invalid response format:", response.data);
        setBookings([]);
      }
    } catch (error) {
      console.error(
        "Error fetching bookings:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings(); // Fetch bookings on component mount
  }, [fetchBookings]);

  const handleSubmit = async () => {
    if (!selectedBooking) return;
    setLoading(true);

    try {
      const { email, _id: bookingId } = selectedBooking;

      const response = await axios.post(
        BASENDPOINT + `/booking/verify`,
        { email, bookingId },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Booking Response:", response.data);
      fetchBookings(); // Refresh bookings after update

      setModalOpen(false); // Close modal on success
      alert("Booking verified successfully.");
    } catch (error) {
      console.error("Error verifying booking:", error);
      alert("Failed to verify the booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingStatus = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        BASENDPOINT + `/show/booking-status`
      );
      if (response.data) {
        setBookingEnabled(response.data.bookingEnabled);
      } else {
        console.warn("Invalid response format:", response.data);
        setBookingEnabled(null);
      }
    } catch (error) {
      console.error(
        "Error fetching booking status:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookingStatus();
  }, [fetchBookingStatus]);

  const toggleBooking = async () => {
    if (bookingEnabled === null) return;
    setLoading(true);
  
    try {
      const response = await axios.put(
        BASENDPOINT + `/show/toggle-booking`,
        { enable: !bookingEnabled },
        { headers: { "Content-Type": "application/json" } }
      );
  
      if (response.data.success) {
        // Fetch updated status from backend instead of assuming the change
        await fetchBookingStatus();
        alert(`Booking has been ${response.data.bookingEnabled ? "enabled" : "disabled"}`);
      } else {
        alert("Failed to update booking status.");
      }
    } catch (error) {
      console.error("Error toggling booking:", error);
      alert("Failed to update booking status.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="archive">
        <div className="container">
          <div className="top_head">
            <div className="title">
              <h2>Bookings</h2>
            </div>
            <div className="booking_btn">
              <button
                className="event_btn"
                onClick={toggleBooking}
                disabled={loading}
              >
                {loading
                  ? "Updating..."
                  : bookingEnabled
                  ? "Disable Booking"
                  : "Enable Booking"}
              </button>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Drama</th>
                <th>Email</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.length > 0 ? (
                bookings.map((data, index) => (
                  <tr key={index}>
                    <td className="truncate" title={data?.show?.drama?.title}>
                      {data?.show?.drama?.title}
                    </td>
                    <td className="truncate" title={data?.email}>
                      {data?.email}
                    </td>
                    <td className="truncate">
                      {getMonth(data?.show?.date)}{" "}
                      {getDateNum(data?.show?.date)},{" "}
                      {getShortYear(data?.show?.date)}
                    </td>
                    <td className="truncate">{data?.totalPrice}</td>
                    <td className="truncate">
                      <span
                        disabled={loading}
                        onClick={() => {
                          if (data?.status !== "confirmed") {
                            setSelectedBooking(data);
                            setModalOpen(true);
                          }
                        }}
                        className="status"
                      >
                        {data?.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && selectedBooking && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
          <div className="booking_con">
            <h2>Booking Verification!</h2>
            <h3>01234567890 (Personal)</h3>
            <p>
              <span>Approve the request.</span>
            </p>
            <button className="event_btn" onClick={handleSubmit}>
              OK
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Bookings;
