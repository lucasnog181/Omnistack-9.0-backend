const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    data: String,
    aproved: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
});

module.exports = mongoose.model('Booking', BookingSchema)