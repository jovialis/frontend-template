/**
 * Created by jovialis (Dylan Hanson) on 9/11/20
 **/

const mongoose = require('mongoose');

// Establish connection to database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Register models
// TODO: