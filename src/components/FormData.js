import React from "react";

const FormData = ({ item }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <h6>Bill From</h6>
        <p>{item.billFrom}</p>
      </div>
      <div>
        <h6>Bill To</h6>
        <p>{item.billTo}</p>
      </div>
      <div>
        <h6>Email</h6>
        <p>{item.billFromEmail}</p>
      </div>
      <div>
        <h6>Current Date</h6>
        <p>{item.currentDate}</p>
      </div>
      <div>
        <h6>Date of Issue</h6>
        <p>{item.dateOfIssue}</p>
      </div>
      <div>
        <h6>Total</h6>
        <p>{item.subTotal}</p>
      </div>
      <div>
        <h6>Notes</h6>
        <p>{item.notes}</p>
      </div>
    </div>
  );
};

export default FormData;
