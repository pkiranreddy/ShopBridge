import React from "react";
import { ModalEdit } from "./ModalEdit";
import { ModalDelete } from "./DeleteModal";

export const ListItem = ({ item, handleDelete, ...props }) => {
  const { name, Description, Price, id } = item;
  return (
    <div className="card m-2 styled-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{Description}</p>
        <p className="card-text">Price : {Price} $</p>
        <div className="d-flex justify-content-between align-self-end">
          {/* <div
            className="add-button m-0 p-1 bg-light text-dark styled-button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </div> */}
          <ModalDelete handleClick={() => handleDelete(id)} />
          <ModalEdit item={item} {...props} />
        </div>
      </div>
    </div>
  );
};
