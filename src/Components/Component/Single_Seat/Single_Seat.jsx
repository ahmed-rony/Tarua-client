import "./Single_Seat.scss";
// import TicketContext from "../../Utils/Ticket_Reducer";
// import { useContext } from "react";

const Single_Seat = ({ seat, price }) => {
  // const { state, toggleSeat } = useContext(TicketContext);
  // const isSelected = state.seats.includes(seat);
  // console.log(state.seats);

  return (
    <div
      className="single"
      //  onClick={() => toggleSeat(seat)}
    >
      <div className="arm" />
      <div
        className="seat"
        // style={{
        //   backgroundColor: isSelected ? "#ddd" : "#03c33d",
        // }}
      />
      <div className="arm" />
    </div>
  );
};

export default Single_Seat;
