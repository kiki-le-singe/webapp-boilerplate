define([
  'backbone',
  'marionette',
  'templates'
],

function (Backbone, Marionette, templates) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: templates.moviesummary,
    tagName: 'li',
    className: 'movie',

    initialize: function () {
    }
  });
});
