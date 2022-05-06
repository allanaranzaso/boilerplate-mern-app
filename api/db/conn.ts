import * as mongoDB from 'mongodb'
import { configEnv } from '../helpers/configenv.helper'

const connectionString: String | undefined = process.env.MONGO_URI // mongodb uri to access the db

// Global
export const collections: { collection?: mongoDB.Collection } = {}

/**
 * Connect to the MongoDB database
 */
export async function connectToDB() {
    configEnv() // load .env file

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString as string)

    try {
        await client.connect()
        
        const db: mongoDB.Db = client.db(process.env.DB_NAME as string)

        const collection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME as string)

        collections.collection = collection
        console.log(`Successfully connected to db: ${db.databaseName} and collection: ${collection.collectionName}`)
    } catch (err) {
        console.error(`ERROR! ${err}`)
    }

}