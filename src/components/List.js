import React from "react";

function List(props) {
  const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

  const listItems = props.groceries.map(grocery => (
    <li key={grocery.id}>{grocery.name}</li>
  ))

  return (
    <div>
      <h1>Grocery List</h1>

      <ul className="list-group">{listItems}</ul>

      <h1>Items Not Purchased</h1>

      <ul className="list-group">{notPurchased.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
      </ul>
    </div >
  );
}

export default List;
