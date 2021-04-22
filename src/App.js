import React, { useState, useEffect } from "react";
import "./App.css";
import { AddItem } from "./addItem";
import { ListItem } from "./listItem";
import { Pagination } from "./pagination";

function App() {
  const [items, setItems] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleCreate = ({ name, des, price }) => {
    fetch("https://607ef47f02a23c0017e8c72f.mockapi.io/api/shop/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, Description: des, Price: price })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Maximum limit reached`);
        }
        return res.json();
      })
      .then(data => {
        let newItems = [data, ...items];
        setItems(newItems);
      })
      .catch(error => alert(error));
  };

  const handleDelete = id => {
    fetch(`https://607ef47f02a23c0017e8c72f.mockapi.io/api/shop/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed`);
        }
        return res.json();
      })
      .then(data => {
        let index = items.findIndex(item => item.id === data.id);
        let newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      })
      .catch(e => alert(e));
  };

  useEffect(() => {
    fetch("https://607ef47f02a23c0017e8c72f.mockapi.io/api/shop/items")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed`);
        }
        return res.json();
      })
      .then(data => {
        setItems(data);
      })
      .catch(e => alert(e));
  }, []);

  //Get Current Posts
  const indexOfLasItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLasItem - itemsPerPage;
  const CurrentItems = items.slice(indexOfFirstItem, indexOfLasItem);

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="header">
        <h4 style={{ marginLeft: "20px", marginBottom: "0px" }}>Shop Bridge</h4>
      </div>

      <div className="create">
        <AddItem handleSubmit={handleCreate} />
      </div>

      <div className="p-2">
        <h4 className="text-center">List of Items in Inventory</h4>
        <div className="list-container">
          {CurrentItems.map(item => (
            <ListItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              items={items}
              setItems={setItems}
            />
          ))}
        </div>
      </div>
      <footer>
        <Pagination
          itemsPerPage={itemsPerPage}
          items={items}
          paginate={page => setCurrentPage(page)}
        />
      </footer>
    </div>
  );
}

export default App;
