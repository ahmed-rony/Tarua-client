import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./PayMessageModal.scss";

const PayMessageModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <div className="booking_con">
        <h2>Booking Sent!</h2>
        <p>Please complete your payment through <span>(Bkash sent money)</span> in 30 minutes to confirm your seats.</p>
        <h3>01234567890 (Personal)</h3>
        <p><span>Bkash Reference must be your email.</span></p>
        <p>Then please wait for the confirmation email.</p>
        {/* <button onClick={onClose}>OK</button> */}
      </div>
    </Modal>
  );
};

export default PayMessageModal;
