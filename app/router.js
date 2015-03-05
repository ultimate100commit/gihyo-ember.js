import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('products');
  this.resource('product',  { path: ':id' });
  this.resource('cart');
});

export default Router;
