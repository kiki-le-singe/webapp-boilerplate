define([
  'backbone',
  'marionette',
  'views/movieItemView'
],

function (Backbone, Marionette, MovieItemView) {
  'use strict';

  return Backbone.Marionette.CollectionView.extend({
    childView: MovieItemView,
    tagName : 'ul',
    className : 'movies',

    initialize: function () {
      this.collection.fetch();
    }
  });
});
