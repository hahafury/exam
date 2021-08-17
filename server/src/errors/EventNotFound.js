const ApplicationError = require('./ApplicationError');

class EventNotFoundError extends ApplicationError{
  constructor (message) {
    super(message || 'event not found', 404);
  }
}

module.exports = UserNotFoundError;
