let path = require('path');
let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CheckObjLoader= require('./loader/check-obj-loader')

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    resolveLoader: {
  		modules: [path.join(__dirname, 'loader'), 'node_modules']
	},
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,//排除掉node_module目录
                use:[
                		{
	                    	loader:'babel-loader',
	                    	options:{
	                        	presets: ['@babel/preset-env'],
	                    	}
	                	},{
	                	 	loader: 'check-obj-loader',
						}
                ]
            }

        ]
    },
    plugins: [
		    new HtmlWebpackPlugin({template: './index.html'})
		]
};
