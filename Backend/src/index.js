import exprss from 'express';
import 'dotenv/config';

import authRoutes from './routes/authRoutes.js';
import { connectDB } from './lib/db.js';


const app = exprss();
const PORT = process.env.PORT || 3000;

app.use(exprss.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});