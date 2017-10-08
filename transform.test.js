const assert    = require('chai').assert
	, transform = require('./transform')

describe('transform', () => {

    it('transforms array to object', () => {
        const t = transform({
            positive: _ => _.filter(n => n >= 0),
            negative: _ => _.filter(n => n <= 0)
        })
        assert.deepEqual(t([1, -5, 2, 7, -1, 0, -4]), {
            positive: [1, 2, 7, 0],
            negative: [-5, -1, 0, -4]
        })
    })

    it('accesses array by index', () => {
        const t = transform({
            x: '0',
            y: '1'
        })
        assert.deepEqual(t([1, 3]), {x: 1, y: 3})
    })

	it('transforms object to object', () => {
		const t = transform({
			fullName: _ => _.firstName + ' ' + _.lastName,
			job: 'job',
			age: ['birthDay', _ => 2017 - _.getFullYear()],
            github: 'links.github'
		})
		const amine = {
			firstName: 'Amine',
			lastName: 'Ben hammou',
			birthDay: new Date('1990-05-05'),
			job: 'Developer',
            links: {
                github: 'https://github.com/webNeat',
                twitter: 'https://twitter.com/WebNeat'
            }
		}
		assert.deepEqual(t(amine), {
			fullName: 'Amine Ben hammou',
			job: 'Developer',
			age: 27,
            github: 'https://github.com/webNeat'
		})
	})
})
