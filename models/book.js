const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    img:{
        data:Buffer,
        contentType:String
    },
    title:{type:String},
    author:{type:String},
    category:{type:String},
    des:{type:String},
    rating:{type:Number}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;