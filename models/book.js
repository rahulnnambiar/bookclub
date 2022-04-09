const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    img:{
        data:Buffer,
        contentType:String
    },
    title:{type:String, require:true},
    author:{type:String, require:true},
    category:{type:String, require:true},
    des:{type:String, require:true},
    rating:{type:Number, require:true}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;