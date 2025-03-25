const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const users = require('./users.json');  // Assuming this file contains an array of users

app.use(express.json());

app.post('/users/add1', (req, res) => {
    const name = req.body.name;
    const roll = req.body.roll;

    // Generate new id based on the current length of the users array
    const id = users.length + 1; 

    // Create new user object
    const user = { id, name, roll };

    // Add the new user to the users array
    users.push(user);

    // Save the updated users array to the users.json file
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync('./users.json', data);

    // Send a response with the id of the added user
    res.json({ message: `User with id ${user.id} added successfully!` });

    // Optionally log the updated data for debugging
    console.log(data);
});

app.listen(port, () => {
    console.log(`The server started running on http://localhost:${port}`);
});
