const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8081;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecomwebsite'
});



//admin database...............//

//admin login..
app.post('/admin', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM admin WHERE a_username = ? AND a_password = ?';
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        return res.status(200).json({ message: 'Login successful' });
    });
});

//user table 
app.get('/userslist', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }

        return res.send(result);
    });
});

//Products table 
app.get('/productstable', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }

        return res.send(result);
    });
});

//Orders table 
app.get('/orderstable', (req, res) => {
    const sql = 'SELECT * FROM orders';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'No Orders found' });
        }

        return res.send(result);
    });
});

//Orders table 
app.get('/paymentstable', (req, res) => {
    const sql = 'SELECT * FROM payments';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'No payment history found' });
        }

        return res.send(result);
    });
});

//Query for pie chart
app.get('/piechart', (req, res) => {
    const sql = 'SELECT category, COUNT(*) AS product_count FROM products GROUP BY category';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }

        return res.send(result);
    });
});

//Query for displaying total earning
app.get('/totalamount', (req, res) => {
    const sql = 'SELECT SUM(amount) AS total_earnings FROM payments';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const totalEarnings = result[0].total_earnings || 0;

        return res.json({ totalEarnings });
    });
});

//Query for calculating total nuber of orders
app.get('/totalorders', (req, res) => {
    const sql = 'SELECT COUNT(*) AS total_orders FROM orders';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const totalOrders = result[0].total_orders || 0;
        return res.json({ totalOrders });
    });
});

//Query for calculating total number of products
app.get('/totalproducts', (req, res) => {
    const sql = 'SELECT COUNT(*) AS total_products FROM products';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const totalProducts = result[0].total_products || 0;
        return res.json({ totalProducts });
    });
});

//Query for calculating total number of users
app.get('/totalUsers', (req, res) => {
    const sql = 'SELECT COUNT(*) AS total_users FROM user';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const totalUsers = result[0].total_users || 0;
        return res.json({ totalUsers });
    });
});





//user database................//

//user signup
app.post('/usersignup', (req, res) => {
    const sql = "INSERT INTO user (`fname`, `lname`, `mail`, `pass`) VALUES (?, ?, ?, ?)";
    
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

//user login
app.post('/userlogin', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM user WHERE mail = ? AND pass = ?';
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        return res.status(200).json({ message: 'Login successful' });
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
