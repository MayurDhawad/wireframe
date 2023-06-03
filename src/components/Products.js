import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaTrash } from 'react-icons/fa'

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

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };


  let filterProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.brand === filter);

  let searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let filteredProducts = searchTerm === '' ? filterProducts : searchProducts

  filteredProducts = filteredProducts.slice(0, 20);

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
            <option value="OPPO">OPPO</option>
            <option value="Huawei">Huawei</option>
            <option value="Infinix">Infinix</option>
            <option value="HP Pavilion">HP Pavilion</option>
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
        {filteredProducts.length > 0 ? <ul className="list-group">
          <table className="table table-bordered">
            <thead className="table-success ">
              <tr>
                <th>Sr No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>
                      <img src={product.images[0]} className="img-fluid" alt="" height="100px" width="100px"/>
                    </td>
                    <td>
                    <FaTrash className="d-flex justify-content-center w-100" onClick={() => handleDelete(product.id)} style={{color: 'red', cursor: 'pointer'}}>Delete</FaTrash>  
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
        : <h4 className="d-flex justify-content-center w-100 text-dark mt-4">No Products to Display</h4>}
      </div>
    </>
  );
};

export default Products;
