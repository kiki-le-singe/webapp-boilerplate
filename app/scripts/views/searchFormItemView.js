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

    filterMoviesList: function (e) {
      var value = this.ui.movieInput.val();

      if (value !== '') {
        this.ui.filterForm.addClass('filter');
        Vent.trigger('filterMoviesList', value);
      }
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
