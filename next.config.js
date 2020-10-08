const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	poweredByHeader: false,
	assetPrefix: isProd ? 'url' : '',
	cssModules: true,
	cssLoaderOptions: {
		url: false,
		importLoaders: 1,
		localIdentName: '[local]_[hash:base64:7]',
	},
	sassOptions: {
		localIdentName: '[local]_[hash:base64:7]',
	}
};
