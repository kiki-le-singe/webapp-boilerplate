define([
  'backbone',
  'models/movie',
  'vent',
  'moment'
],

function (Backbone, Movie, Vent, moment) {
  'use strict';

  return Backbone.Collection.extend({
    model: Movie,
    url: '/server/stubs/movies.json',
    // comparator: 'title', // Sort collection by title

    /*
    comparator: function(movieModel) {
      // Sort collection by date
      return moment(movieModel.get('date')).unix();
    },*/

    comparator: function(movieModel) {
      // Sort collection by date and title
      return moment(movieModel.get('date')).unix() + ' ' + movieModel.get('title');
    },

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
