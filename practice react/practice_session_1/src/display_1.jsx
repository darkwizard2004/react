// function DisplayProducts() {
//     const products = [
//         { name: 'Perk', quantity: 10, sales: 7, price: 10 },
//         { name: 'Pepsi', quantity: 10, sales: 20, price: 30 },
//         { name: 'Coke', quantity: 18, sales: 50, price: 40 },
//         { name: 'Maggi', quantity: 41, sales: 22, price: 15 },
//         { name: '5Star', quantity: 7, sales: 9, price: 20 },
//     ];

//     const productList = {
//         products.filter(
//             (item) => {
//                 if(item.sales > item.quantity){
//                     product.push(item);
//                 }
//             }
//         )
//     };

//     let revenue = {
//         productList.map(
//             (item) => {
//                 return (item.price * item.sales);
//             }
//         );
//     };

//     if(productList.length === 0){
//         return (
//             <div>
//                 <h1>No products with higher sales than stock</h1>
//             </div>
//         )
//     }
//     return (
//         <div>
//             <h1>products: </h1>
//             <h2>{productList}</h2>
//             <h3>revenue: {revenue}</h3>
//         </div>
//     )
// }

// export default DisplayProducts;

function DisplayProducts() {
    const products = [
        { name: 'Perk', quantity: 10, sales: 7, price: 10 },
        { name: 'Pepsi', quantity: 10, sales: 20, price: 30 },
        { name: 'Coke', quantity: 18, sales: 50, price: 40 },
        { name: 'Maggi', quantity: 41, sales: 22, price: 15 },
        { name: '5Star', quantity: 7, sales: 9, price: 20 },
    ];

    const productList = products.filter((item) => item.sales > item.quantity);
    
    if(productList.length > 0){
        return <h1>No products with higher sales than stock</h1>

    }

    return (
    <div>
        <h1>Products:</h1>
        <ul>
            {productList.map((item, index) => (
                <li key={index}>
                    {item.name} — Revenue: {item.sales * item.price}
                </li>
            ))}
        </ul>
    </div>
);

}

export default DisplayProducts;