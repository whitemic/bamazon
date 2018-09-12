# bamazon

CLI using mysql and inquirer npm packages to simulate a customer-facing shopping experience with the ability to make orders on products that are in stock.

This project was the homework for week 12 of the Penn Coding Boot Camp.

# Application Details

CLI using mysql and inquirer npm packages to simulate a customer-facing shopping experience with the ability to make orders on products that are in stock.

## Goal
To create an amazon-like store using NodeJS.

## Installation and Set-up
Make sure to run *npm install* at the root directory after cloning the project. You will also need to create and use (using either Workbench or from the command line) the sql file `bamazonDB.sql` in order to set up the database.
You also need to create a file named `keys.js` in the root directory, which includes an object that holds the host, port, user, password and database, for the database that you created using the `bamazonDB.sql` file.

```
var keys = {
    host: "[YOUR_HOST_NAME]",
    port: [YOUR_PORT_NUMBER],
    user: "[YOUR_USER]",
    password: "[YOUR_PASSWORD]",
    database: "bamazonDB"
}

module.exports.keys = keys;
```

## Functionality
See video walkthrough: https://drive.google.com/file/d/1x1NNQjvC_doHLDw-u9aA5PFMLOvBzwS7/view

## Objectives
* To create an application which leverages a MySQL database.
* To use NodeJS to interact with that database, manipulate its data and display it back to the user.

## Built using:
* JavaScript
* NodeJS
* MySQL

## Authors
**Michaela White** - *Author* -->
