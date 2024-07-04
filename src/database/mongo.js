import mongoose from "mongoose";

const ConnectToMongo = async () => {
    try {
        await mongoose
            .connect('mongodb+srv://Mohammed:25111995M!@cluster0.y68nwnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            .then(console.log('CONNECTED TO MONGO SUCCESSFULLY'))
            .catch((err) => console.log(err))
    } catch (error) {
        return error
    }
}


export default ConnectToMongo