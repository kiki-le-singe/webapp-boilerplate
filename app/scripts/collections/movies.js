define([
  'backbone',
  'models/movie',
  'vent'
],

function (Backbone, Movie, Vent) {
  'use strict';

  return Backbone.Collection.extend({
    model: Movie,
    url: '/server/stubs/movies.json',

    initialize: function () {
      var self = this;

      Vent.on('filterMoviesList', function(movieTitle) {
        console.log('self --- ', self);

        var filteredData = self.where({
          title: movieTitle
        });
        var filteredCollection = new Backbone.Collection();
        filteredCollection.reset(filteredData);

        console.log('filteredCollection --- ', filteredCollection);
        this.trigger('filterMoviesListFinished', filteredCollection);
      });

      Vent.on('clearMoviesList', function() {
        console.log('clearMoviesList');
        console.log('self --- ', self);
        this.trigger('clearMoviesListFinished', self);
      });
    }
  });
});
