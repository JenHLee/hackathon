var path = require("path");

module.exports = {
    outputDir : path.resolve("../backend/public"),
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8080/api',
                changeOrigin: true,
                pathRewirte: {
                    "^api":''
                }
            }

        }
    }
};