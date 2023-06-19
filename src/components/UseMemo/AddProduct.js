import { useState, useEffect, useMemo, useRef } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const inputName = useRef();
  const handleAddProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        name,
        price: Number(price)
      }
    ]);
    setName("");
    setPrice("");
    inputName.current.focus();
    console.log(inputName);
  };

  const handleFocus = (index) => {
    setName((prev) => products[index].name);
    setPrice((prev) => products[index].price);
  };

  const handleEdit = (index) => {
    const newProduct = [...products];
    newProduct.splice(index, 1, { name: name, price: Number(price) });
    setProducts((prev) => newProduct);
    setName("");
    setPrice("");
  };

  const total = useMemo(() => {
    const result = products.reduce((totalPrice, current) => {
      return totalPrice + current.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "12px 32px" }}>
      <input
        style={{ display: "block" }}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName((prev) => e.target.value)}
        ref={inputName}
      />
      <input
        style={{ display: "block" }}
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice((prev) => e.target.value)}
      />

      <button onClick={handleAddProduct}>Add</button>

      <h1>Total: {total}</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <div style={{ display: "block" }}>
              <li
                key={index}
                style={{ display: "inline-block", marginRight: "8px" }}
                onClick={() => handleFocus(index)}
              >
                {product.name} - {product.price}
              </li>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
