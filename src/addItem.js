import React, { useState } from "react";

export const AddItem = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center  flex-column">
      <h5 className="">Add Item to Inventory</h5>
      <div className="add-form">
        <div className="p-2">
          <input
            type="text"
            id="Name"
            required
            placeholder="Name"
            value={name}
            className="styled-input"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            id="Description"
            placeholder="Description"
            value={des}
            className="styled-input"
            onChange={e => setDes(e.target.value)}
          />
        </div>
        <div className="p-2">
          <input
            type="number"
            placeholder="Price($)"
            id="Price"
            value={price}
            className="styled-input"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div
        className="add-button"
        onClick={() => {
          if (price === "" || name === "") {
            alert("Name and Price can't be empty");
          } else {
            handleSubmit({ name, des, price });
          }
          setName("");
          setDes("");
          setPrice("");
        }}
      >
        ADD
      </div>
    </div>
  );
};
