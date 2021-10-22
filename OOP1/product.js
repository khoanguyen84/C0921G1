function Product(id, name, price, quantity){
    this.id = id,
    this.name = name,
    this.price = price,
    this.quantity = quantity;
}

let products = [
    new Product(1, "iPhone6s", 3000000, 5),
    new Product(2, "iPhone7s", 4000000, 6),
    new Product(3, "iPhone8s", 5000000, 3),
    new Product(4, "iPhone9s", 6000000, 7),
    new Product(5, "iPhoneX", 7000000, 10),
]


function printProduct(){
    let tbody = document.getElementsByTagName('tbody')[0];

    products.forEach(function(product, index){
        tbody.innerHTML += `<tr>
                                <td>${product.id}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>${product.quantity}</td>
                                <td>
                                    <button onclick="editProduct(${product.id})">Edit</button>
                                </td>
                            </tr>`;
    })
}


function editProduct(id){
    let product = products.find(function(product, index){
        return product.id == id;
    });
    // let product = null;
    // for(let i=0;i < products.length;i++){
    //     if(products[i].id == id){
    //         product = products[i];
    //     }
    // }
    alert(`
                Id: ${product.id}\n
                Name: ${product.name}\n
                Price: ${product.price}\n
                Quantity: ${product.quantity}
            `)
}

printProduct();