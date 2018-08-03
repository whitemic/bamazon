var mysql = require("mysql");
var inquirer = require("inquirer");
var display = false; 

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
})

connection.connect(function(err){
    if (err) throw err;
    displayItems();
})

function start() {
    placeOrder();
}

function placeOrder() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type the id number of the product you would like to purchase",
            name: "productNum"
        },
        {
            type: "input",
            message: "How many units of this product would you like to buy?",
            name: "quantity"
        }
    ]).then(function(response){
        checkOrder(response.productNum, response.quantity);
    })
}
function checkOrder(product, quantity) {
    var queryString = "SELECT * FROM products WHERE item_id=" + product;
    connection.query(queryString, function(err, res){
        if (err) throw err;
        var stock = parseInt(res[0].stock_quantity);
        var price = parseInt(res[0].price)
        // console.log("Stock is " + stock);
        // console.log("Quantity is " + quantity);
        if (stock <= quantity) {
            console.log("Insufficient Quantity!")
            connection.end();
        } else {
            buyProduct(product, quantity, stock, price);
        }
    });
}

function buyProduct(product, quantity, stock, price) {
    var newQuantity = stock - quantity;
    var queryString = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE item_id =" + product;
    console.log(queryString);
    connection.query(queryString, function(err, res){
        if (err) throw err;
        var cost = quantity * price;
        console.log("Order Complete! Total cost of purchase is: " + cost);
        connection.end();
    })
}

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item Id: " + res[i].item_id + " | " + res[i].product_name + " | " + "$" + res[i].price);
        }
        display = true;
        if (display === true) {
            start();
        }
    })
}

