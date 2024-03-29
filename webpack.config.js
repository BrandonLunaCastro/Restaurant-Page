const path = require("path");

module.exports = {
    mode:"development",
    entry : {
        index : "./src/index.js"
    },
    devtool:"inline-source-map",
    devServer:{
        static: "./dist",
    },
    output: {
        filename: "main.js",
        path : path.resolve(__dirname, "dist")
    },
    module:{
        rules : [
            {
                test:/\.css$/i,
                use : [
                    'style-loader',
                    {
                    loader : 'css-loader', options: {importLoaders: 1} 
                    },
                    'postcss-loader' 
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type : 'asset/resource'
                
            }
        ]
    }

}