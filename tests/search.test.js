const {describe, it} = require("mocha");
const assert = require("assert");
const search = require("../src/search");

const appData = [{
	"id": 1,
	"name": "Jim",
	"age": 20,
	"settings": {
		"live": true,
		"lastActive": "2019-10-10"
	}
}, {
	"id": 2,
	"name": "Jane",
	"age": 15,
	"settings": {
		"live": true,
		"lastActive": "2019-10-11"
	}
}, {
	"id": 3,
	"name": "Arron",
	"age": 55,
	"settings": {
		"live": false,
		"lastActive": "2019-10-12"
	}
}, {
	"id": 4,
	"name": "Bill",
	"age": 12,
	"settings": {
		"live": true,
		"lastActive": "2019-10-13"
	}
}, {
	"id": 5,
	"name": "Alison",
	"age": 78,
	"settings": {
		"live": false,
		"lastActive": "2019-10-14"
	}
}];

describe('Search Function', () => {
	it(`Can find users by id`, () => {
		const results = search(appData, {
			"id": 5
		});
		
		assert.strictEqual(results.length, 1, 'The results have the correct length');
		assert.strictEqual(results[0].id, 5, 'The correct id exists');
	});
	
	it(`Can find all users who's name matches the regular expression`, () => {
		const results = search(appData, {
			"name": /J/i
		});
		
		assert.strictEqual(results.length, 2, 'The results have the correct length');
		assert.strictEqual(results[0].id, 1, 'The correct id exists');
		assert.strictEqual(results[1].id, 2, 'The correct id exists');
	});
	
	it(`Can find users by specifying a path to some deep object data`, () => {
		const results = search(appData, {
			"settings.live": true
		});
		
		assert.strictEqual(results.length, 3, 'The results have the correct length');
		assert.strictEqual(results[0].id, 1, 'The correct id exists');
		assert.strictEqual(results[1].id, 2, 'The correct id exists');
		assert.strictEqual(results[2].id, 4, 'The correct id exists');
	});
	
	it(`Can find users by specifying a path to some deep object data`, () => {
		const results = search(appData, {
			"settings.live": false
		});
		
		assert.strictEqual(results.length, 2, 'The results have the correct length');
		assert.strictEqual(results[0].id, 3, 'The correct id exists');
		assert.strictEqual(results[1].id, 5, 'The correct id exists');
	});
});