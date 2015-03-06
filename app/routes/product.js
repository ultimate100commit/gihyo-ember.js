import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('products').findBy('id', Number(params.id));
  },

  actions: {
    addCart: function(product) {
      this.controllerFor('cart').pushObject(product);

      this.transitionTo('cart');
    }
  }
});
