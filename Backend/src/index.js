import exprss from 'express';
import 'dotenv/config';

import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

import { connectDB } from './lib/db.js';


const app = exprss();
const PORT = process.env.PORT || 3000;

app.use(exprss.json()); 

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});