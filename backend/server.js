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
    database: 'signup'
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO sign (`fname`, `lname`, `email`, `password`) VALUES (?, ?, ?, ?)";
    
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

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM sign WHERE email = ? AND password = ?';
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
