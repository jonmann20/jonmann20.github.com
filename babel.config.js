function isBabelRegister(caller) {
	return !!(caller && caller.name === '@babel/register');
}

module.exports = (api) => {
	const isRegister = api.caller(isBabelRegister);

	if(isRegister) { // is a gulp task script
		return {
			presets: [[
				'@babel/preset-env', {
					targets: {
						node: 'current'
					}
				}
			]]
		};
	}
	else {
		return {
			plugins: ['@babel/plugin-syntax-dynamic-import']
		};
	}
};