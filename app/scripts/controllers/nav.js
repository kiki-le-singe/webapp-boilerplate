define([
  'marionette',
  'views/main',
  'views/about',
  'views/movieDetailItemView',
  'collections/movies'
],

function (Marionette, MainView, AboutView, movieDetailItemView, Movies) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    home: function () {
      this.region.show(new MainView());
    },

    movieDetail: function (id) {
      var movies = new Movies(),
          self = this;
      movies.fetch({
          success : function () {
              var movie = movies.get(id);
              self.region.show(new movieDetailItemView({ model:movie }));
          }
      });
    },

    about: function () {
      this.region.show(new AboutView());
    }
  });

  return NavController;
});
