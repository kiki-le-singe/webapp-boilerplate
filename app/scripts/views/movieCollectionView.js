define([
  'backbone',
  'marionette',
  'views/movieItemView',
  'vent'
],

function (Backbone, Marionette, MovieItemView, Vent) {
  'use strict';

  return Backbone.Marionette.CollectionView.extend({
    childView: MovieItemView,
    tagName : 'ul',
    className : 'movies',

    initialize: function() {
      var self = this;
      self.collection.fetch();

      Vent.on('filterMoviesListFinished', function(filteredCollection) {
        self.collection = filteredCollection;
        self.render();
      });
      Vent.on('clearMoviesListFinished', function(defaultCollection) {
        self.collection = defaultCollection;
        self.render();
      });
    }
  });
});
