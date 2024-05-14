import { connect, disconnect } from "mongoose";

async function ConnectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        
        throw new Error("Connection to MongoDB failed")
    }
}

async function DisconnectFromDatabase() {
    try {
        await disconnect() 
    } catch (error) {
        throw new Error("Could not disconnect from MongoDB")
    }
}

export { ConnectToDatabase, DisconnectFromDatabase };