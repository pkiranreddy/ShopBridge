import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const ModalEdit = ({ item, items, setItems }) => {
  const { name, Description, Price, id } = item;
  const [name1, setName] = useState(name);
  const [des, setDes] = useState(Description);
  const [price, setPrice] = useState(Price);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleEdit = () => {
    fetch(`https://607ef47f02a23c0017e8c72f.mockapi.io/api/shop/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        name: name1,
        Description: des,
        Price: price
      })
    })
      .then(res => res.json())
      .then(data => {
        let index = items.findIndex(item => item.id === data.id);
        let newItems = [...items];
        newItems.splice(index, 1, data);
        setItems(newItems);
      });
    toggle();
  };

  return (
    <div>
      <div
        className="add-button m-0 p-1 bg-light text-dark styled-button"
        onClick={toggle}
      >
        Edit
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <div className="p-2">
            <p className="mb-0">Name</p>
            <input
              type="text"
              id="Name"
              required
              placeholder="Name"
              value={name1}
              className="styled-input"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="p-2">
            <p className="mb-0">Description</p>
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
            <p className="mb-0">Price</p>
            <input
              type="number"
              placeholder="Price(Rs)"
              id="Price"
              value={price}
              className="styled-input"
              onChange={e => setPrice(e.target.value)}
            />{" "}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
