import Ember from 'ember';

export default Ember.ArrayController.extend({
  totalPrice: function() {
    return this.mapBy('price').reduce(function(total, price) {
      return total + price;
    }, 0);
  }.property('@each.price'),

  uniqProductCount: function() {
    return this.mapBy('id').uniq().get('length');
  }.property('@length'),

  save: function() {
    var ids = JSON.stringify(this.mapBy('id'));
    localStorage.setItem('cart-product-ids', ids);
  }
});
