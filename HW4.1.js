const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 3, name: 'Bob White', email: 'bob@example.com' },
    { id: 4, name: 'Charlie Green', email: 'charlie@example.com' },
    { id: 5, name: 'David Black', email: 'david@example.com' },
    { id: 6, name: 'Emily Rose', email: 'emily@example.com' },
    { id: 7, name: 'Frank Ocean', email: 'frank@example.com' },
    { id: 8, name: 'Grace Kelly', email: 'grace@example.com' },
    { id: 9, name: 'Henry Ford', email: 'henry@example.com' },
    { id: 10, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/users', (req, res) => {
    res.json(users)
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})