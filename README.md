# Base Classes for oop on NodeJS

## Instalation

```bash
npm i node-abstract-oop
```

## Event Controller

Class for simple work with [EventEmmiter](https://nodejs.org/dist/latest-v7.x/docs/api/events.html#events_class_eventemitter)

### Example

```javascript
const EventEmitter = require('events');
const EventController = require('node-abstract-oop').EventController;

class Test extends EventController {

	constructor(eventEmmiter) {
		super(eventEmmiter);
	}

	get eventNames() {
		return {
			'test.event': 'testAction',
		};
	}

	testAction(message) {
	    console.log('Test event with message: ', message);
    }

}

// Init controller

const myEE = new EventEmitter();

let testEventController = new Test(myEE);
testEventController.initListeners();

// fire event
myEE.emit('test.event', {arg: 'Event arg'});
```

## Redis Event Controller

Class for simple work with [Redis](https://github.com/NodeRedis/node_redis)

### Example

```javascript
const RedisEventController = require('node-abstract-oop').RedisEventController;
const redis = require("redis");
let client = redis.createClient();

class Test extends RedisEventController {

	constructor(redis) {
		super(redis);
	}

	get eventNames() {
		return {
			'test.event': 'testAction',
		};
	}

	testAction(message) {
	    console.log('Test event with message: ', message);
    }

}

// Init controller
let testEventController = new Test(client);
testEventController.initListeners();

// fire event
client.rpush('test.event', JSON.stringify({arg: 'Event arg'}));
```