import { useContext } from "react";
import Stairs from "../../Stairs/Stairs";
import Single_Seat from "../../Single_Seat/Single_Seat";
import ShowContext from "../../../Utils/Reducers/Ticket_Reducer";

const ShilpokolaMainHall = ({ seats }) => {
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
    <div className="auditorium_margin_seats mainhall_margin">
      <div className="auditorium_content mainhall_content">
        <div className="main_auditorium_content">
          <div className="stage">STAGE</div>
          <div className="mainhall_downFloor">
            {/* <h2 className="floor">DOWN FLOOR</h2> */}
            <div className="row_cons">
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <div className="space" />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
          </div>
          <div className="mainhall_upperFloor">
            {/* <h2 className="floor">UPPER FLOOR</h2> */}
            {/* <div className="row_cons">
              <div className="row s_11">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_13">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_11">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_13">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_15">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_10">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div>
            <div className="row_cons">
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row s_15">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="row">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="indie_rows">
        <div className="seat_box02"></div>
      </div>
    </div>
  );
};

export default ShilpokolaMainHall;
