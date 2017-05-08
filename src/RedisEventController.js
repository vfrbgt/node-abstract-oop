class RedisEventController {

    get eventNames() {
        throw new Error('This method must be implement!');
    }

    constructor(redis) {
        if (this.constructor === RedisEventController) {
            throw new Error("Can't instantiate abstract class!");
        }
        this.redis = redis;
    }

    initListeners() {
        let eventNames = Object.keys(this.eventNames);
        eventNames.forEach((eventName) => {
            this.redis.subscribe(eventName);
        });
        this.redis.on('message', (channel, message) => {
            if(this[this.eventNames[channel]]) {
                this[this.eventNames[channel]](JSON.parse(message));
            }
        });
    }

}

module.exports = RedisEventController;