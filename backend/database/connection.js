import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const dbUri = process.env.dbConnectionUrl

export const connection = async() => {
    await mongoose.connect(`${dbUri}`).then(
        console.log("Databse connected")
    ).catch(err => console.log("Something went wrong", err.message))
}