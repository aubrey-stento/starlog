var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student1@ds012578.mlab.com:12578/starlog'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})