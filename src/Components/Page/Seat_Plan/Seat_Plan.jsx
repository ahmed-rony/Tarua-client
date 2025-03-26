import { useCallback, useContext, useEffect, useState } from "react";
import Single_Seat from "../../Component/Single_Seat/Single_Seat";
import Stairs from "../../Component/Stairs/Stairs";
import { Ticket } from "../../Utils/Ticket";
import "./Seat_Plan.scss";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import ShowContext from "../../Utils/Reducers/Ticket_Reducer";
import ExperimentalHall from "../../Component/Halls/ExperimentalHall/ExperimentalHall";
import { BASENDPOINT, EXPERIMENTAL_HALL } from "../../../variable";
import PayMessageModal from "../../Component/PayMessageModal/PayMessageModal";
import ShilpokolaMainHall from "../../Component/Halls/ShilpokolaMainHall/ShilpokolaMainHall";

export function getMonth(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { month: "short" }); // "Feb"
}

export function getDay(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { weekday: "short" }); // "Sat"
}

export function getDateNum(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { day: "2-digit" }); // "15"
}
export function getShortYear(dateString) {
  const year = new Date(dateString).getFullYear(); // Extract full year (e.g., 2025)
  return year.toString().slice(-2); // Return last two digits of the year
}
export function getFullYear(dateString) {
  const year = new Date(dateString).getFullYear(); // Extract full year (e.g., 2025)
  return year.toString(); // Return last two digits of the year
}
export function getFormattedDate(dateProp) {
  if (!dateProp) return ""; // Handle undefined/null date

  const date = new Date(dateProp);
  if (isNaN(date)) {
    console.error("Invalid date:", dateProp);
    return dateProp; // Return the original in case of failure
  }

  return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
}

const Seat_Plan = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [shows, setShows] = useState([]);
  const [seats, setSeats] = useState([]);
  const { showId } = useParams();
  const location = useLocation();
  const { state, dispatch } = useContext(ShowContext);
  const {
    selectedDate,
    selectedTime,
    selectedSeats,
    totalPrice,
    email,
    selectedShowId,
  } = state;

  const handleChange = (e) => {
    const { value } = e.target;

    dispatch({ type: "SET_USER_EMAIL", payload: value });
  };

  const handleDateSelect = (date) => {
    dispatch({ type: "SET_SELECTED_DATE", payload: date });
  };

  const handleTimeSelect = (time, showId) => {
    dispatch({ type: "SET_SELECTED_TIME", payload: { time, showId } });
  };

  // FETCHING SHOW INFOS
  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/show/${showId}`);

      if (response.data) {
        setShows(response.data);
        // console.log(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setShows([]);
      }
    } catch (error) {
      console.error(
        "Error fetching shows:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // FETCHING SHOW SEATS
  const fetchVenueSeats = useCallback(async () => {
    if (!showId || !selectedTime) return; // Prevent unnecessary calls

    try {
      setLoading(true);
      const response = await axios.get(
        BASENDPOINT + `/venues/${state?.selectedShowId}/${selectedTime}`
      );

      if (response.data) {
        setSeats(response.data.venue);
      } else {
        console.warn("Invalid response format:", response.data);
        setSeats([]);
      }
    } catch (error) {
      console.error(
        "Error fetching seats:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, [showId, selectedTime]);

  useEffect(() => {
    fetchShows(); // Call it when the component mounts
    if (selectedTime !== null) {
      fetchVenueSeats();
    }
  }, [fetchShows]);

  useEffect(() => {
    fetchVenueSeats();
  }, [fetchVenueSeats]);

  useEffect(() => {
    return () => {
      // Reset state only if leaving the ticket page
      dispatch({ type: "RESET_FORM" });
    };
  }, [location.pathname]);

  const handleSubmit = async () => {
    setLoading(true);

    if (
      !state.selectedSeats ||
      state.selectedSeats.length === 0 ||
      !state.email.trim()
    ) {
      alert("Please select at least one seat and enter your email.");
      setLoading(false);
      return;
    }

    try {
      const bookingData = {
        showId: selectedShowId,
        email: email,
        time: selectedTime,
        seats: selectedSeats,
      };

      const response = await axios.post(
        BASENDPOINT + `/booking/apply`,
        bookingData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Booking Response:", response.data);

      // Show modal instead of alert
      setModalOpen(true);

      // Reset form after successful booking
      dispatch({ type: "RESET_FORM" });
    } catch (error) {
      console.error("Error applying for booking:", error);
      alert("Failed to apply for booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="seat_plan container">
      <div className="content">
        <div className="time">
          <h5 className="detail_header">Select Date</h5>
          <div className="date_item">
            {shows?.shows?.map((show, index) => (
              <div
                className={`item ${
                  selectedDate === show.date ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleDateSelect(show.date)}
              >
                <span className="month">{getMonth(show.date)}</span>
                <span className="date">{getDateNum(show.date)}</span>
                <span className="day">{getDay(show.date)}</span>
              </div>
            ))}
          </div>
          {selectedDate && (
            <>
              <h5 className="detail_header">Select Time</h5>
              <div className="date_time">
                {shows?.shows
                  ?.find((show) => show.date === selectedDate)
                  ?.time.map((time, index) => (
                    <div
                      className={`item ${
                        selectedTime === time ? "selected" : ""
                      }`}
                      key={index}
                      onClick={() =>
                        handleTimeSelect(
                          time,
                          shows.shows.find((show) => show.date === selectedDate)
                            ._id
                        )
                      }
                    >
                      <span
                        className={`time ${
                          selectedTime === time ? "selected" : ""
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
        <div className="auditorium">
          {selectedTime && <h5 className="detail_header">Select Seat</h5>}
          {selectedTime && seats?.hall === EXPERIMENTAL_HALL && (
            <ExperimentalHall seats={seats} />
            // <div className="auditorium_margin_seats">
            //   <div className="auditorium_content">
            //     <div className="seat_box01 pos_box">
            //       <div className="row">
            //         <Stairs />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //       </div>
            //       <div className="row">
            //         <Stairs />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //       </div>
            //       <div className="row">
            //         <Stairs />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //       </div>
            //     </div>

            //     <div className="seat_box01 pos_box">
            //       <div className="row">
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Stairs />
            //       </div>
            //       <div className="row">
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Stairs />
            //       </div>
            //       <div className="row">
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Stairs />
            //       </div>
            //     </div>
            //     <div className="seat_box01 pos_box02">
            //       <div className="row">
            //         {(Ticket?.seat?.A1?.seats || [])
            //           .slice(0, 7)
            //           .map((seat, index) => (
            //             <Single_Seat
            //               key={`first-${index}`}
            //               sat={seat}
            //               price={Ticket.seat.A1.price}
            //             />
            //           ))}
            //         <Stairs />
            //         {(Ticket?.seat?.A1?.seats || [])
            //           .slice(7)
            //           .map((seat, index) => (
            //             <Single_Seat
            //               key={`second-${index}`}
            //               seat={seat}
            //               price={Ticket.seat.A1.price}
            //             />
            //           ))}
            //       </div>
            //       <div className="row">
            //         {Ticket?.seat?.A2?.seats?.slice(0, 7).map((seat, index) => (
            //           <Single_Seat
            //             key={`first-${index}`}
            //             seat={seat}
            //             price={Ticket.seat.A1.price}
            //           />
            //         ))}

            //         <Stairs />

            //         {Ticket?.seat?.A1?.seats?.slice(7).map((seat, index) => (
            //           <Single_Seat
            //             key={`second-${index}`}
            //             seat={seat}
            //             price={Ticket.seat.A1.price}
            //           />
            //         ))}
            //       </div>
            //       <div className="row">
            //         {Ticket?.seat?.A1?.seats?.slice(0, 7).map((seat, index) => (
            //           <Single_Seat
            //             key={`first-${index}`}
            //             seat={seat}
            //             price={Ticket.seat.A1.price}
            //           />
            //         ))}

            //         <Stairs />

            //         {Ticket?.seat?.A1?.seats?.slice(7).map((seat, index) => (
            //           <Single_Seat
            //             key={`second-${index}`}
            //             seat={seat}
            //             price={Ticket.seat.A1.price}
            //           />
            //         ))}
            //       </div>
            //     </div>
            //   </div>
            //   <div className="indie_rows">
            //     <div className="seat_box02">
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //     </div>
            //     <div className="seat_box02 box03">
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //     </div>
            //     <div className="seat_box02 box05">
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //       <Single_Seat />
            //     </div>
            //     <div className="seat_box02 box04">
            //       <div className="left">
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //       </div>
            //       <div className="right">
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //         <Single_Seat />
            //       </div>
            //     </div>
            //   </div>
            // </div>
          )}
          <ShilpokolaMainHall />
        </div>
      </div>
      <div className="ticket_price">
        <div className="summery_stick">
          <h5 className="detail_header">Ticket Details</h5>
          <div className="summery">
            <div className="info">
              <div className="row">
                <span>Drama:</span>
                {shows?.drama?.title && <span>{shows?.drama?.title}</span>}
              </div>
              <div className="row">
                <span>Director:</span>
                {shows?.drama?.director && (
                  <span>
                    {shows?.drama?.director?.map((d, i) => (
                      <>
                        <span key={i}>{d?.name}</span>
                        {i < shows?.drama?.director?.length - 1 && ", "}
                      </>
                    ))}
                  </span>
                )}
              </div>
              <div className="row">
                <span>Venue:</span>
                {seats?.name && <span>{seats?.name}</span>}
              </div>
              <div className="row">
                <span>Hall:</span>
                {seats?.hall && <span>{seats?.hall}</span>}
              </div>
              <div className="row">
                <span>Date:</span>
                {selectedDate && (
                  <span>
                    {getMonth(selectedDate)} {getDateNum(selectedDate)},{" "}
                    {getShortYear(selectedDate)}
                  </span>
                )}
              </div>
              <div className="row">
                <span>Show Time:</span>
                {selectedTime && <span>{selectedTime}</span>}
              </div>
              <div className="row">
                <span>Ticket Quantity:</span>
                {selectedSeats.length > 0 && (
                  <span>{selectedSeats.length}</span>
                )}
              </div>
              <div className="row">
                <span>Total Amount:</span>
                {totalPrice && <span>{totalPrice} TK</span>}
              </div>
              <div className="row">
                <span>Selected Seats:</span>
                {selectedSeats.length > 0 && (
                  <div className="seats_row">
                    {selectedSeats?.map((seat) => (
                      <span key={seat} className="seat_box">
                        {seat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mail_row">
                <span>Email:</span>

                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              className="event_btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
      <PayMessageModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Seat_Plan;
