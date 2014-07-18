define([
  'backbone',
  'marionette',
  'collections/movies',
  'templates',
],

function (Backbone, Marionette, Movies, templates) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: templates.moviedetail,

    ui: {
      'unpublish': '.unpublish',
      'edit': '.edit',
      'contenteditable': '.contenteditable'
    },

    events : {
      'mousedown @ui.unpublish': 'unpublish',
      'mousedown @ui.edit': 'edit'
    },

    initialize: function() {
      this.listenTo(this.model, 'change:status', this.changeState);
    },

    unpublish: function () {
      this.model.set('status', 0);
    },

    edit: function () {
      console.log('this.$el ---- ', this.$el);
      this.ui.contenteditable.attr({contenteditable: true});
    },

    changeState: function () {
      this.$el.fadeTo('slow', 0.5);
      this.ui.unpublish.fadeOut('slow');
    },
  });
});
