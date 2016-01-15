// Browser distribution of the A-Frame component.
(function () {
  if (typeof AFRAME === 'undefined') {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }

  // Register all components here.
  var components = {
    example: require('./index').Component
  };

  Object.keys(components).forEach(function (name) {
    AFRAME.registerComponent(name, components[name]);
  });
})();
