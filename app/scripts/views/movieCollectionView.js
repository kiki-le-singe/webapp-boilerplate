define([
  'marionette',
  'views/movieItemView',
  'vent'
],

function (Marionette, MovieItemView, Vent) {
  'use strict';

  return Marionette.CollectionView.extend({
    childView: MovieItemView,
    tagName : 'ul',
    className : 'table-view',

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
