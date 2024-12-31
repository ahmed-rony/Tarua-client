import { useContext } from "react";
import Single_Seat from "../../Component/Single_Seat/Single_Seat";
import Stairs from "../../Component/Stairs/Stairs";
import { Ticket } from "../../Utils/Ticket";
import "./Seat_Plan.scss";
import TicketContext from "../../Utils/Ticket_Reducer";

const Seat_Plan = () => {
  // const { state, dispatch } = useContext(TicketContext);

  // const handleChange = (e) => {
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     payload: { name: e.target.name, value: e.target.value },
  //   });
  // };
  // console.log(Ticket);
  // console.log(Ticket?.seat?.A1?.seats);
  // console.log("First 7 seats:", Ticket?.seat?.A1?.seats?.slice(0, 7));

  return (
    <section className="seat_plan container">
      <div className="content">
        <div className="time">
          <h5 className="detail_header">Select Date</h5>
          <div className="date_item">
            <div className="item">
              <span className="month">Jan</span>
              <span className="date">08</span>
              <span className="day">Wed</span>
            </div>
            <div className="item">
              <span className="month">Jan</span>
              <span className="date">12</span>
              <span className="day">Sun</span>
            </div>
            <div className="item">
              <span className="month">Jan</span>
              <span className="date">13</span>
              <span className="day">Mon</span>
            </div>
          </div>
          <h5 className="detail_header">Select Time</h5>
          <div className="date_time">
            <div className="item">
              <span className="time">01:00 PM</span>
            </div>
            <div className="item">
              <span className="time">08:00 PM</span>
            </div>
          </div>
        </div>
        <div className="auditorium">
          <h5 className="detail_header">Select Seat</h5>
          <div className="auditorium_margin_seats">
            <div className="auditorium_content">
              <div className="seat_box01 pos_box">
                <div className="row">
                  <Stairs />
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
                  <Stairs />
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
                  <Stairs />
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

              <div className="seat_box01 pos_box">
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
                  <Stairs />
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
                  <Stairs />
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
                  <Stairs />
                </div>
              </div>
              <div className="seat_box01 pos_box02">
                <div className="row">
                  {(Ticket?.seat?.A1?.seats || []).slice(0, 7).map((seat, index) => (
                    <Single_Seat
                      key={`first-${index}`}
                      sat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}
                  <Stairs />
                  {(Ticket?.seat?.A1?.seats || []).slice(7).map((seat, index) => (
                    <Single_Seat
                      key={`second-${index}`}
                      seat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}
                </div>
                <div className="row">
                  {Ticket?.seat?.A2?.seats?.slice(0, 7).map((seat, index) => (
                    <Single_Seat
                      key={`first-${index}`}
                      seat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}

                  <Stairs />

                  {Ticket?.seat?.A1?.seats?.slice(7).map((seat, index) => (
                    <Single_Seat
                      key={`second-${index}`}
                      seat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}
                </div>
                <div className="row">
                  {Ticket?.seat?.A1?.seats?.slice(0, 7).map((seat, index) => (
                    <Single_Seat
                      key={`first-${index}`}
                      seat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}

                  <Stairs />

                  {Ticket?.seat?.A1?.seats?.slice(7).map((seat, index) => (
                    <Single_Seat
                      key={`second-${index}`}
                      seat={seat}
                      price={Ticket.seat.A1.price}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="indie_rows">
              <div className="seat_box02">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="seat_box02 box03">
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
                <Single_Seat />
              </div>
              <div className="seat_box02 box05">
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
              <div className="seat_box02 box04">
                <div className="left">
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
                <div className="right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ticket_price"></div>
    </section>
  );
};

export default Seat_Plan;
