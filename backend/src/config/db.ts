import mongoose from 'mongoose'

export const connectDB = async ()  =>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        // console.log(connection)
        const url2=`${connection.host}:${connection.port}`
        console.log(`MongoDB Connectado en ${url2}`)
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}