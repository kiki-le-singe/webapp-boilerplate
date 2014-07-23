define([
  'marionette',
  'views/main',
  'views/movieDetailItemView',
  'collections/movies',
  'views/sitemapCompositeView',
  'collections/sitemap'
],

function (Marionette, MainView, MovieDetailItemView, Movies, SitemapCompositeView, Sitemap) {
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
              self.region.show(new MovieDetailItemView({ model:movie }));
          }
      });
    },

    sitemap: function () {
      this.region.show(new SitemapCompositeView({collection: new Sitemap()}));
    }
  });

  return NavController;
});
