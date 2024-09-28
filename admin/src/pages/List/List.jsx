import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./List.css";

const List = ({ backendUrl }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${backendUrl}/api/v1/food/list`);
    if (response.data.success) {
      setList(response.data.foods);
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.delete(
      `${backendUrl}/api/v1/food/delete/${foodId}`
    );
    if (response.data.success) {
      toast.success(response.data.message);
    }
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <h3>All Food List</h3>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${backendUrl}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
