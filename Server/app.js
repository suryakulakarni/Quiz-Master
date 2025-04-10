const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes');

app.use(express.json()); // parse JSON request bodies
app.use('/api/users', userRoutes); // user routes mounted

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));