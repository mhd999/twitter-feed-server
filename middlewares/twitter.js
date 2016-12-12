// @flow

import Redis from 'redis';
import sse  from 'server-sent-events';

const redisClient = Redis.createClient();
const redisClientSub = Redis.createClient();

export function getTwitts(req, res, next) {
 
    redisClient.lrange('tweets_channel', 0, -1, (err, reply) => {
        if (err) 
            return next(err);

        return res.status(200).json({tweets: reply});
  });
}

export function getTwittsFeed(req, res, next) {
  	redisClientSub.subscribe('tweets_channel');

  	redisClientSub.on('message', (channel, message) => {
      return res.sse(`data: ${message}\n\n`);
  	});
}