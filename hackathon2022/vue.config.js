var path = require("path");

module.exports = {
    outputDir : path.resolve("../backend/public"),
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                
            }

        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/hackathon2022/'
    : '/'
  
};