// @flow

import Redis from 'redis';
import Twitter from 'twitter';
import {CONSUMER_TWITTER_KEY, CONSUMER_TWITTER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET} from '../config/config';

const redisClient = Redis.createClient();
const filter = 'norway';

const twitterClient = new Twitter({
    consumer_key: CONSUMER_TWITTER_KEY,
    consumer_secret: CONSUMER_TWITTER_SECRET,
    access_token_key: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET
});


const getTwitts = () => {
    //clear redis
    redisClient.flushdb();

    const twitterStream = twitterClient.stream('statuses/filter', {track: filter});
    twitterStream.on('data', event => {
        redisClient.publish('tweets_channel', JSON.stringify(event));
        redisClient.rpush('tweets_channel', JSON.stringify(event));
    });

    twitterStream.on('error', e => {
        //TODO implement logging
        throw e;
    });
}

module.exports = getTwitts;
