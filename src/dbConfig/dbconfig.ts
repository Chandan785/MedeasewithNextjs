// src/dbConfig/dbconfig.ts
import mongoose from 'mongoose';
//const MONGODB_URI="mongodb://localhost:27017/medeaseNextjs"
async function connectToDatabase() {
  try {
    const uri = process.env.MONGODB_URI;
   // const uri =  MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(uri);
    
    const connection = mongoose.connection;
    
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });

  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

export { connectToDatabase};
export default connectToDatabase;