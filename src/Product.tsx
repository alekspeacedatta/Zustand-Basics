import { useProductStore } from "./useProductStore";

const Product = () => {
  const products = useProductStore((state) => state.products);
  const addProduct = useProductStore((state) => state.addProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct)
  const handleAddProduct = () => {
    const name = prompt("Enter product name", "");
    const priceStr = prompt("Enter product price", "");
    const category = prompt("Enter product category", "");

    if (!name || !priceStr || !category) {
      alert("All fields are required");
      return;
    }

    const price = parseFloat(priceStr);
    if (isNaN(price)) {
      alert("Price must be a number");
      return;
    }

    addProduct({ name, price, category }); // No id needed — it’s auto-assigned
  };
  return (
    <div>
      <h1>Products:</h1>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div style={{margin: '30px 0px'}} key={product.id}>
            <h2>#{product.id}</h2>
            <h3>Name: {product.name}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Category: {product.category}</h3>
            <button onClick={() => { deleteProduct(product.id) }}>Delete Product</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No products added yet</p>
      )}
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Product;
