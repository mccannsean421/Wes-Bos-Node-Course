const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //setting the method of how mongo will retrieve data
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name!'
    },
    slug: String,
    description: {
        type: String,
        trim: true,
    },
    tags: [String]
});

//pre save hook to slugify string
storeSchema.pre('save', function(next) {
    
    if(!this.isModified('name')) {
        next(); //skip it
        return;
    }
    
    this.slug = slug(this.name);
    next();

    //todo make more resiliant
});

module.exports = mongoose.model('Store', storeSchema);