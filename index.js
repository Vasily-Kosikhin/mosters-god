import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
const app = express();
const PORT = 7000;
const DB_URL = 'mongodb://127.0.0.1:27017/monters';

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

async function startServer() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

startServer();
