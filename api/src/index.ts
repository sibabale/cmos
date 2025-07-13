// [ API > INDEX ] ##########################################################################

// 1.1. EXTERNAL DEPENDENCIES ......................................................................
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
// 1.1. END ........................................................................................

// 1.2. INTERNAL DEPENDENCIES ......................................................................
import accountRoutes from './routes/accountRoutes';
// 1.2. END ........................................................................................

// 1.3. MODULE ...................................................................................

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan((tokens, req, res) => {
  const logObject = {
    url: tokens.url(req, res),
    method: tokens.method(req, res),
    status: Number(tokens.status(req, res)),
  };
  // Print as a JSON object
  return JSON.stringify(logObject, null, 2);
}));

// Home route
app.get('/', (req, res) => {
  res.json({
    name: 'CMOS Modular API',
    version: '1.0.0',
    description: 'A modular Node.js/TypeScript API for CMOS integration',
    timestamp: new Date().toISOString()
  });
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Controllers
app.use('/api/v1', accountRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

// END FILE ########################################################################################
