// getting-started.js
const mongoose = require('mongoose');
const internal = require('stream');
mongoose.connect('mongodb://localhost/saurabh', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log("we are conneted  brooo..");
// });

const kittySchema = new mongoose.Schema({

    name: String,
    age: Object,
    gender: String,
    email: String,
    phone: Object


});
kittySchema.methods.speak = function() {
    var greeting = "My name is " + this.name + "my age is " + this.age + "my gender is " + this.gender + "my email id is " +
        this.email + "my phone number is " + this.phone;
    console.log(greeting);
}

const Kitten = mongoose.model('saurabhkittens', kittySchema);
const saurabhkittens = new Kitten({ name: 'saurabh kumar pandey', age: 25, gender: 'male', email: 'sp1324878@gmail.com', phone: 6387319072 });


// console.log(saurabh.name); 

saurabhkittens.save(function(err, saurabh) {
    if (err) return console.error(err);
    saurabhkittens.speak();
});
// saurabhkittens2.save(function (err, saurabh) {
//     if (err) return console.error(err);
//     // saurabhkittens2.speak();
// });
// Kitten.find({ name: 'saurabh kumar pandey' }, function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// })