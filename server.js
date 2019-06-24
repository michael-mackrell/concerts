const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//define our concerts object
const days = require('./routes/api/concerts');

// DB Config
const db = require('./config/keys').mongoURI;
