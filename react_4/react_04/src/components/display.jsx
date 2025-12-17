function Display() {

    const products = [
        { name: 'Perk', quantity: 10, sales: 7 },
        { name: 'Pepsi', quantity: 10, sales: 20 },
        { name: 'Coke', quantity: 18, sales: 50 },
        { name: 'Maggi', quantity: 41, sales: 22 },
        { name: '5Star', quantity: 7, sales: 9 },
    ];

    return (
        <div>
            {products.map((product) => (<h1>{product.name}</h1>)) }
        </div>
    )
}

export default Display;