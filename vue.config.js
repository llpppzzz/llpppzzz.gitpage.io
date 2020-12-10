const path = require('path')
const resolve = dir => {
	return path.join(__dirname, dir)
}

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
			.set('utils', resolve('src/utils'))
			.set('api', resolve('src/api'))
			.set('mock', resolve('src/api/mock'))
	}
}
