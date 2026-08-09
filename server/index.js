import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import session from "express-session";
import cookieParser from "cookie-parser";
import helmet from "helmet";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});