const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connection: ", connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports= dbConnect;