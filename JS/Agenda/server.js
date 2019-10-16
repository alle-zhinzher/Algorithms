const path = require('path');
const express = require('express');
const config = require('config');

const serverConfig = config.get('server');
// App initialization
const app = express();
app.use(express.json())

// Connect database
require('./server/database/connection/mongoose');



// Middleware
app.use(require('./server/routs/middleware/logger'));
// API routs
app.use('/api/task', require('./server/routs/api/tasks'));
app.use('/api/users', require('./server/routs/api/user'));
app.use('/api/auth', require('./server/routs/api/auth'));

app.use(express.static(__dirname + '/client/'));
//Client routs
app.get('/register', (req, res) => res.sendFile(__dirname + '/client/templates/register.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/client/templates/login.html'));
app.get('/', (req, res) => res.sendFile(__dirname + '/client/templates/index.html'));

// Run server
app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));