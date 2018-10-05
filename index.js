const request = require('request')

if (!process.argv[2]) {
	console.error('No url defined !')
	return
}

const url = process.argv[2]

request({
	method: 'POST',
	url: 'http://localhost:1969/web',
	headers: {
		'Content-Type': 'text/plain'
	},
	body: url
}, (error, response, body) => {
	if (error) {
		console.log(error)
		return
	}

	if (body)console.log(JSON.parse(body)[0])
})

// url test : http://www.publish.csiro.au/zo/Fulltext/ZO17004
