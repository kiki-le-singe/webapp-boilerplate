define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.moviesummary,
    tagName: 'li',
    className: 'table-view-cell media',

    initialize: function () {
    }
  });
});
