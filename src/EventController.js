class EventController {

    get eventNames() {
        throw new Error('This method must be implement!');
    }

    constructor(eventEmmiter) {
        if (this.constructor === EventController) {
            throw new Error("Can't instantiate abstract class!");
        }
        this.eventEmmiter = eventEmmiter;
    }

    initListeners() {
        this.eventNames.forEach((eventName) => {
            this.eventEmmiter.addListener(eventName, this[eventName].bind(this));
        });
    }

}

module.exports = EventController;