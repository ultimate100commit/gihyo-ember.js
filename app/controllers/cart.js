import Ember from 'ember';

export default Ember.ArrayController.extend({
  uniqProductCount: function() {
    return this.mapBy('id').uniq().get('length');
  }.property('@length')
});
