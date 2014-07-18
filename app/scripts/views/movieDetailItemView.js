define([
  'marionette',
  'collections/movies',
  'templates',
],

function (Marionette, Movies, templates) {
  'use strict';

  return Marionette.ItemView.extend({
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
      this.ui.contenteditable.attr({contenteditable: true});
    },

    changeState: function () {
      this.$el.fadeTo('slow', 0.5);
      this.ui.unpublish.fadeOut('slow');
    },
  });
});
