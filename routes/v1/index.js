import express from 'express';
import dashboardRoutes from './dashboard';

const router = express.Router();

router.use('/dashboard', dashboardRoutes);

module.exports = router;
