const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connection established');
    })
    .catch((err) => {
      return console.log(`Connection Error: ${err}`);
    });
}

module.exports = connectToDatabase;
