define([
  'backbone',
  'templates'
],

function (Backbone, templates) {
  'use strict';

  return Backbone.View.extend({
    template: templates.searchform,

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
});
