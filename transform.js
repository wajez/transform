const R = require('ramda')

const transform = R.curry((fields, object) => {
	const result = {}
	for(name in fields) {
		const value = fields[name]
			, type  = R.type(value)
		let fn = R.identity
		, data = null
		if (type == 'Function') {
			fn = value
			data = object
		} else if (type == 'Array') {
			fn = value[1]
			data = R.path(value[0].split('.'), object)
		} else if (type == 'String') {
			data = R.path(value.split('.'), object)
		}
		result[name] = fn(data)
	}
	return result
})

module.exports = transform
