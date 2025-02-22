// Define the EventBus class.
class EventBusClass {
	constructor() {
		// This will store all our event callbacks.
		this.events = {};
	}

	/**
   * Emit event: This method will be used to trigger an event.
   * @param {String} eventName - The name of the event.
   * @param {Any} payload - Data to be passed with the event.
   */
	emit(eventName, payload) {
		// If the event exists in our events object, call all its callbacks.
		if (this.events[eventName]) {
			this.events[eventName].forEach((callback) => callback(payload));
		}
	}

	/**
   * Subscribe to an event: This method will be used to add a new callback to an event.
   * @param {String} eventName - The name of the event.
   * @param {Function} callback - The function to call when the event is triggered.
   * @returns {Function} - Returns a function to deregister this callback.
   */
	on(eventName, callback) {
		// If the event doesn't exist yet, create an empty array for it.
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		// Push the callback into the event's array.
		this.events[eventName].push(callback);
		// Return a function to deregister this callback.
		return () => this.off(eventName, callback);
	}

	/**
   * Unsubscribe from an event: This method will be used to remove a callback from an event.
   * @param {String} eventName - The name of the event.
   * @param {Function} callback - The callback function to remove.
   */
	off(eventName, callback) {
		// If the event doesn't exist, simply return.
		if (!this.events[eventName]) return;
		// If no specific callback is provided, delete all callbacks for this event.
		if (!callback) {
			delete this.events[eventName];
		} else {
			// Otherwise, filter out the specific callback from the event's array.
			this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
		}
	}
}

// Export an instance of the EventBus class.
export const EventBus = new EventBusClass();
