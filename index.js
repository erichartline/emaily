const express = require('express');
require('./services/passport');

const app = express();

// pass in app to our authRoutes file
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
