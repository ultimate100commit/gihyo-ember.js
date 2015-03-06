import Ember from 'ember';
import OrderLine from '../models/order-line.js';

export default Ember.ArrayController.extend({
  totalPrice: function() {
    return this.mapBy('price').reduce(function(total, price) {
      return total + price;
    }, 0);
  }.property('@each.price'),

  uniqProductCount: function() {
    return this.mapBy('id').uniq().get('length');
  }.property('length'),

  addProduct: function(product) {
    var orderLine = this.get('model').findBy('product', product);

    if (!orderLine) {
      orderLine = OrderLine.create({
	product: product
      });
      this.pushObject(orderLine);
    }

    orderLine.incrementProperty('count');
  },

  save: function() {
    var ids = [];
    this.forEach(function(orderLine) {
      var productId = orderLine.get('product.id');
      var count = orderLine.get('count');
      for (var i = 0; i < count; i++) {
	ids.push(productId);
      }
    });
    localStorage.setItem('cart-product-ids', JSON.stringify(ids));
  }.observes('@each.count'),

  restore: function() {
    var idsString = localStorage.getItem('cart-product-ids');
    var ids;
    if (idsString) {
      ids = JSON.parse(idsString);
    } else {
      ids = [];
    }
    var products = [];
    products = products.compact();
    this.set('model', products);
  },

  actions: {
    increment: function(orderLine) {
      orderLine.incrementProperty('count');
    },

    decrement: function(orderLine) {
      orderLine.decrementProperty('count');
    }
  }
});
