const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const addUser = require('./routes/addUser');
const getUsers = require('./routes/getUsers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addUser.routes);
app.use(getUsers);

app.listen(5000);
