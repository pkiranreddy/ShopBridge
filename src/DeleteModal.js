import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const ModalDelete = ({ handleClick }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div
        className="add-button m-0 p-1 bg-light text-dark styled-button"
        onClick={toggle}
      >
        Delete
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete</ModalHeader>
        <ModalBody>Are you sure, You want to Delete ?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleClick();
              toggle();
            }}
          >
            Delete
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
