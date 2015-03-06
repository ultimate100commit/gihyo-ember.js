import DS from 'ember-data';

var Product = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  url: DS.attr('string')
});

Product.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Ember Stickers', price: 6.0, url: 'http://devswag.com/products/ember-sticker' },
    { id: 2, name: 'Ember.js T-Shirt', price: 22.0, url: 'http://devswag.com/products/ember-js-tshirt'},
    { id: 3, name: 'Ember Mascot V1', price: 10.0, url: 'http://devswag.com/products/ember-mascot-tomster'}
  ]
});

export default Product;
