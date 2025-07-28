import express from 'express';
import cors from 'cors';
import pluginRoutes from './routes/plugins';
import { authMiddleware } from './utils/auth';
export const app = express();
app.use(cors());
app.use(express.json());

app.use('./plugins', authMiddleware, pluginRoutes);
// test des routes
app.get('/', (req, res) => res.send('Crazy plugins Api is live'));
