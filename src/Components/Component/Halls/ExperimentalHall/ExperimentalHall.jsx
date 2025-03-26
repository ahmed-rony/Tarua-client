import { useContext } from "react";
import Stairs from "../../Stairs/Stairs";
import Single_Seat from "../../Single_Seat/Single_Seat";
import ShowContext from "../../../Utils/Reducers/Ticket_Reducer";

const ExperimentalHall = ({ seats }) => {
  const { state, dispatch } = useContext(ShowContext);
  const { selectedSeats, totalPrice } = state;

  const toggleSeatSelection = (seat) => {
    const isSelected = selectedSeats.includes(seat.number);
    const price = seat.price || 0;

    // Prevent selecting more than 5 seats
    if (!isSelected && selectedSeats.length >= 5) {
      alert("Maximum 5 seats can be selected.");
      return;
    }

    const updatedSeats = isSelected
      ? selectedSeats.filter((s) => s !== seat.number)
      : [...selectedSeats, seat.number];

    const updatedTotalPrice = isSelected
      ? totalPrice - price
      : totalPrice + price;

    dispatch({
      type: "SET_SELECTED_SEATS",
      payload: updatedSeats,
      totalPrice: updatedTotalPrice,
    });
  };

  return (
    <div className="auditorium_margin_seats">
      <div className="auditorium_content">
        <div className="seat_box01 pos_box">
          <div className="row">
            <Stairs />
            {(seats?.seatingPlan?.[3]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
          <div className="row">
            <Stairs />
            {(seats?.seatingPlan?.[4]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
          <div className="row">
            <Stairs />
            {(seats?.seatingPlan?.[5]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
        </div>
        <div className="seat_box01 pos_box">
          <div className="row">
            {(seats?.seatingPlan?.[6]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
          </div>
          <div className="row">
            {(seats?.seatingPlan?.[7]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
          </div>
          <div className="row">
            {(seats?.seatingPlan?.[8]?.seats || []).slice(0, 10).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
          </div>
        </div>
        <div className="seat_box01 pos_box02">
          <div className="row">
            {(seats?.seatingPlan?.[0]?.seats || []).slice(0, 7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
            {(seats?.seatingPlan?.[0]?.seats || []).slice(7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
          <div className="row">
            {(seats?.seatingPlan?.[1]?.seats || []).slice(0, 7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
            {(seats?.seatingPlan?.[1]?.seats || []).slice(7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
          <div className="row">
            {(seats?.seatingPlan?.[2]?.seats || []).slice(0, 7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
            <Stairs />
            {(seats?.seatingPlan?.[2]?.seats || []).slice(7).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="indie_rows">
        <div className="seat_box02">
        {(seats?.seatingPlan?.[9]?.seats || []).slice(0, 4).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
        </div>
        <div className="seat_box02 box03">
        {(seats?.seatingPlan?.[9]?.seats || []).slice(4).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
        </div>
        <div className="seat_box02 box05">
        {(seats?.seatingPlan?.[10]?.seats || []).slice(0, 14).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
        </div>
        <div className="seat_box02 box04">
          <div className="left">
          {(seats?.seatingPlan?.[11]?.seats || []).slice(0, 14).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
          <div className="right">
          {(seats?.seatingPlan?.[11]?.seats || []).slice(14).map((seat) => (
              <Single_Seat
                key={`first-${seat?.number}`}
                seat={seat}
                onClick={() => {
                  toggleSeatSelection(seat);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentalHall;
