define([
  'backbone',
  'marionette',
  'templates',
  'vent'
],

function (Backbone, Marionette, templates, Vent) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: templates.searchform,

    ui: {
      'filterForm': '#searchForm',
      'movieInput': '.movie',
      'clear': '.clear'
    },

    events : {
      'keyup @ui.movieInput': 'filterMoviesList',
      'mousedown @ui.clear': 'clear'
    },

    filterMoviesList: function () {
      this.ui.filterForm.addClass('filter');
      Vent.trigger('filterMoviesList', this.ui.movieInput.val());
    },

    clear: function () {
      if (this.ui.filterForm.hasClass('filter')) {
        Vent.trigger('clearMoviesList');
      }
      this.ui.filterForm.removeClass('filter');
      this.ui.movieInput.val('');
    }
  });
});
