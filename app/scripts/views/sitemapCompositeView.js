define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates.sitemap,

    initialize: function () {
      console.log('initialize : sitemap CompositeView this ----- ', this);
    }
  });
});
