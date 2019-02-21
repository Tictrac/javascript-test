# Tictrac JavaScript Developer Project
## Install
```bash
npm i
```

## Requirements
> 1. At any time if you are stuck, need clarification or want further input please don't hesitate to ask. The best developers we work with are people who know how to communicate :)
> 2. If you need to google anything while doing this test project, please feel free. It certainly will not count against you. No one can remember everything!
> 3. Use all the tools available to you such as IDEs and debuggers as required.
> 4. Please write clean code that does not rely on any third party libraries or frameworks. They are not required and we want to see how you solve the problem without using other existing code.

The idea of this test project is to determine your skill level as a JavaScript developer. The project
consists of some mocha tests that have already been written and your final code must comply with.

The task is to write an object search function that can take an array of data objects, a search object and then
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