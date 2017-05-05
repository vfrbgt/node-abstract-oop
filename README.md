# Base Classes for oop on NodeJS

## Event Controller

Class for simple work with [EventEmmiter](https://nodejs.org/dist/latest-v7.x/docs/api/events.html#events_class_eventemitter)

### Example

```javascript
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
```

## Redis Event Controller

Class for simple work with [Redis](https://github.com/NodeRedis/node_redis)

### Example

```javascript
const RedisEventController = require('node-abstract-oop').RedisEventController;

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
```