import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }

});

const MyUser = mongoose.models.MyUser || mongoose.model('MyUser', userSchema);

export default MyUser;
