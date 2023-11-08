import { useEffect, useState } from 'react';

const Blog1 = () => {
    const [data, setResult] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://dummyjson.com/products");
            const products = await response.json();
            setResult(products);
        })();
    }, []);

    return (
        <div className="product-list">
            {data.map((product, i) => (
                <div key={i} className="card">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="card-info">
                        <h2>{JSON.stringify(product.title)}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Discount: {product.discountPercentage}%</p>
                        <p>Rating: {product.rating} stars</p>
                        <p>Stock: {product.stock} available</p>
                        <p>Brand: {product.brand}</p>
                        <p>Category: {product.category}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog1;