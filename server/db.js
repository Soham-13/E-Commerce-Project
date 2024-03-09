import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log('Database Connected Successfully!');
    console.log(`Connection String: ${connect.connection.host}`);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
  }
};

export default connectDatabase;
