const {body, validationResult} = require("express-validator");
const {validationResultsCheck} = require("./util");

const newListingValidators = [
    body("title").notEmpty(),
    body("author").notEmpty(),
    body("category").notEmpty(),
    body("des").isString(),
    body("rating").isNumeric(),
    validationResultsCheck
]
module.exports = {
    newListingValidators
}