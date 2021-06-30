const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://Anirban10:Anirban1008@cluster0.qrm2a.mongodb.net/MEAN?retryWrites=true&w=majority"
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});