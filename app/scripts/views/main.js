define([
  'backbone',
  'views/movieCollectionView',
  'collections/movies',
  'views/searchFormItemView'
],

function (Backbone, MovieCollectionView, Movies, SearchFormItemView) {
  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.movies = new Movies();
      this.movieCollectionView = new MovieCollectionView({collection : this.movies});
      this.searchFormItemView = new SearchFormItemView();
    },

    render: function () {
      this.$el.append(this.searchFormItemView.render().$el);
      this.$el.append(this.movieCollectionView.$el);
      return this;
    }
  });
});
