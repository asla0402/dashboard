const { resolve } = require("path");

module.exports = {
    base: "./",    
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                //order: resolve(__dirname, "order.html"),//
            },
        },
    },
};