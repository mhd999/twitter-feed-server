import express from 'express';
import { getTwitts, getTwittsFeed } from '../../middlewares/twitter';
import sse from 'server-sent-events';

const router = express.Router();

router.route('/')
  .get(getTwitts)

router.route('/feed')
  .get(sse, getTwittsFeed)

module.exports = router;