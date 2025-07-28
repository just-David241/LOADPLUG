import dotenv from 'dotenv';
import { app } from './app';
dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🗳️Crazy plug loader runing on  port ${port}`);
});
