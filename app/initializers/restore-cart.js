export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'restore-cart',
  initialize: function(container, app) {
    container.lookup('controller:cart').restore();
  }
};
