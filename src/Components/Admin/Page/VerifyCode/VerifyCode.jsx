import axios from "axios";
import { useState } from "react";
import "./VerifyCode.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setCode(e.target.value); // Update state with input value
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://tarua-server.onrender.com/api/booking/verify-ticket",
        { confirmationCode: code },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Booking Response:", response.data);
      setData(response.data);

      setModalOpen(true);
    } catch (error) {
      console.error("Error verifying booking:", error);
      alert("Failed to verify the booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify_code">
      <h5 className="detail_header">Verify Ticket</h5>
      <input
        type="text"
        name="code"
        placeholder="Enter Confirmation Code"
        value={code}
        onChange={handleChange}
      />
      <button className="event_btn" onClick={handleSubmit} disabled={loading}>
        Verify
      </button>
      {modalOpen && data && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
          <div className="booking_con">
            <h2>{data?.message}</h2>
            <h3>{data?.bookingDetails?.dramaTitle}</h3>
            {data?.bookingDetails?.seats?.length > 0 && (
              <div className="seats_row">
                {data?.bookingDetails?.seats?.map((seat) => (
                  <span key={seat} className="seat_box">
                    {seat}
                  </span>
                ))}
              </div>
            )}
            <p><span>{data?.bookingDetails?.time}</span></p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default VerifyCode;
