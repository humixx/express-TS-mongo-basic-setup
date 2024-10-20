import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI as string;
    if (!mongoUri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
  
    await mongoose.connect(mongoUri);  // No need to specify 'useNewUrlParser' and 'useUnifiedTopology'

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
