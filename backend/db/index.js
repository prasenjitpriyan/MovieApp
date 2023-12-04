const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('DB is connected!');
    }).catch((error) => {
        console.log("DB connection failed: ", error);
    });