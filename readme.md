# Tictrac JavaScript Developer Project
## Install
```bash
npm i
```

## Requirements
> At any time if you are stuck, need clarification or want further input please don't hesitate to ask. The best developers we work with are people who know how to communicate :)

> If you need to google anything while doing this test project, please feel free. It certainly will not count against you. No one can remember everything!

The idea of this test project is to determine your skill level as a JavaScript developer. The project
consists of some mocha tests that have already been written and your final code must comply with.

The task is to write an object search function that can take an array of data objects, a search object and the
return an array of results.

Search objects are written in Mongo query language. For instance, given this example data object:

```json
[{
	"id": 1,
	"foo": {
		"bar": true
	}
}, {
	"id": 2,
	"foo": {
		"bar": false
	}
}]
```

You should be able to find any object where "foo" contains "bar": true using a query object like this:

```json
{
	"foo.bar": true
}
```

You will notice the dot notation in "foo.bar". This notation allows you to describe a path to the data
you want to match.

Running the above query against the above data array should result in:

```json
[{
 	"id": 1,
 	"foo": {
 		"bar": true
 	}
}]
```