// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd3hjklyahbe4f7.cloudfront.net',
          pathname: '/**',
        },
      ],
    },
  };
  