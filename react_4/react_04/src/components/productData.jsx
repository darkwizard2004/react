function ProductData() {
    
    const products = [
        { name: 'Perk', quantity: 10, sales: 7 },
        { name: 'Pepsi', quantity: 10, sales: 20 },
        { name: 'Coke', quantity: 18, sales: 50 },
        { name: 'Maggi', quantity: 41, sales: 22 },
        { name: '5Star', quantity: 7, sales: 9 },
    ];

const data = products.filter((item) => {return item.quantity > item.sales});

    return (
        <div>
            {data.map((product) => (
                <div key = {product.name}>  
                    <h1>{product.name}</h1>
                    <h1>{product.quantity}</h1>
                    <h1>{product.sales}</h1>
                </div>
            ))}
        </div>
    )
}
// key is a special prop that helps React identify each item in a list uniquely.

export default ProductData;