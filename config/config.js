const config = {
    development: {
        CONSUMER_TWITTER_KEY: 'SnzzQc3vHc6l3E9o7z0hC4LhZ',
        CONSUMER_TWITTER_SECRET: 'jIkWysvwJrn86KCgbji6HJXHiBooV9HTmalD2cCHD463d5IaEB',
        ACCESS_TOKEN: '723250073262542849-YslPNmOgKFkDezCyOJS12Zc80aBMTMY',
        ACCESS_TOKEN_SECRET: 'uRtNWYYvKCGv5CiPqv91UZEX6LaWn919KIleuOxuCKzpm'
    },
    test: {

    },
    production: {
    }
};

if(process.env.NODE_ENV == 'production')
    module.exports = config.production;
else if (process.env.NODE_ENV == 'test')
    module.exports = config.test;
else
    module.exports = config.development;