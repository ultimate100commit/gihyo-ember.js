import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.id);
  },

  actions: {
    addCart: function(product) {
      this.controllerFor('cart').addProduct(product);
      this.controllerFor('cart').save();

      this.transitionTo('cart');
    }
  }
});
