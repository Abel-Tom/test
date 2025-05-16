import express from 'express';
import serverless from 'serverless-http';
import userRoutes from '../src/routes/user.routes';
  
const app = express();
  
app.use(express.json());
app.use('/api/users', userRoutes);

export const handler = serverless(app);