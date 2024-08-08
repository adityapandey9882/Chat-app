import mongoose from "mongoose";

dotenv.config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("DB connected Successfully")})
    .catch( (error) => {
        console.log("DB facing connection issues");
        console.error(error.message);
        process.exit(1);
    })
}

// module.exports = connectWithDb;