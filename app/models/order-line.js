import Ember from 'ember';

export default Ember.Object.extend({
  product: null,
  count: 0,
  price: function() {
    return this.get('product.price') * this.get('count');
  }.property('product.price', 'count')
});
