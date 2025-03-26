import { useContext } from "react";
import "./Single_Seat.scss";
import ShowContext from "../../Utils/Reducers/Ticket_Reducer";

const Single_Seat = ({ seat, onClick }) => {
  const { state } = useContext(ShowContext);

  // Check if the current seat's number is in selectedSeats
  const isSelected = state.selectedSeats.includes(seat?.number);
  const isBooked = seat?.booked; // Whether the seat is booked or not
  const isAvailable = !isBooked; // Available if not booked

  // Determine seat's background color and disable state
  let backgroundColor = "#03c33d"; // Default green for available seats
  let isDisabled = false; // Default to not disabled

  if (isBooked) {
    backgroundColor = "#ff6c5f"; // Gray for booked seats
    isDisabled = true; // Disable the seat if it's booked
  } else if (isSelected) {
    backgroundColor = "#4CAF50"; // Green for selected seats
  } else {
    backgroundColor = "#ddd"; // Light gray for available seats that are not selected
  }

  return (
    <div
      className="single main_hall_single_seat"
      onClick={() => !isDisabled && onClick(seat)} // Only allow click if not disabled
    >
      <div className="arm" />
      <div
        className="seat"
        style={{
          backgroundColor: backgroundColor, // Apply the dynamic background color
          cursor: isDisabled ? "not-allowed" : "pointer", // Change cursor to not-allowed for disabled seats
        }}
      />
      <div className="arm" />
    </div>
  );
};

export default Single_Seat;
