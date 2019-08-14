const mongoose = require('mongoose')

mongoose.connect(
                //host/database_name
    'mongodb://localhost:27017/flights',
    //Always use the options below:
    { useNewUrlParser: true}
);

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})