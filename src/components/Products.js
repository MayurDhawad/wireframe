import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (values) => {
      console.log(values);
  }

  let filterProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.brand === filter);

  let searchProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = searchTerm == '' ? filterProducts : searchProducts

  return (
    <>
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-3">
          <select
            className="form-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
          </select>
          </div>
          <div className="col-3">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products"
          />
          </div>
        </div>
        <ul className="list-group">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>
                      <img src={product.images[0]} className="img-fluid" alt="" height="100px" width="100px"/>
                    </td>
                    <td>
                        <button className="btn btn-danger" onSubmit={handleDelete}>Delete</button>  
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
        <ul className="list-group"></ul>
      </div>
    </>
  );
};

export default Products;
