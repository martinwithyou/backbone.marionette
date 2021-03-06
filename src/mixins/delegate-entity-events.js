import _ from 'underscore';

import {
  bindEvents,
  unbindEvents
} from '../common/bind-events';

// MixinOptions
// - collectionEvents
// - modelEvents

export default {
  // Handle `modelEvents`, and `collectionEvents` configuration
  _delegateEntityEvents(model, collection) {
    const modelEvents = _.result(this, 'modelEvents');

    if (modelEvents) {
      unbindEvents.call(this, model, modelEvents);
      bindEvents.call(this, model, modelEvents);
    }


    const collectionEvents = _.result(this, 'collectionEvents');

    if (collectionEvents) {
      unbindEvents.call(this, collection, collectionEvents);
      bindEvents.call(this, collection, collectionEvents);
    }
  },

  _undelegateEntityEvents(model, collection) {
    const modelEvents = _.result(this, 'modelEvents');
    unbindEvents.call(this, model, modelEvents);

    const collectionEvents = _.result(this, 'collectionEvents');
    unbindEvents.call(this, collection, collectionEvents);
  }
};
