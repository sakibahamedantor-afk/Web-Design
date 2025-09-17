import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id} className="mb-2">
            {prod.name} - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}