### Twitter feed server

This is a [Node.js](https://nodejs.org/) v6+ application to stream twitter tweets, the app using Redis, ExpressJS and Server send event.

### Install dependencies
```sh
npm install
```

### Run tests
```sh
npm run test
```

### Run Application
```sh
npm run start
```

### Run Redis locally
```sh
redis-server /usr/local/etc/redis.conf
```

### Notes:
- Make sure you have Redis running before running the app
- Client app can be found [here](https://github.com/mhd999/twitter-feed-client)