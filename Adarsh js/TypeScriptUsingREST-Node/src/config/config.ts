import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const PORT = process.env.PORT || 3000;
export const MONGO_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1`;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
};
