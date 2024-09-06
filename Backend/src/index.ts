import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { loginRoute } from '../src/routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', loginRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
